import { useDispatch, useSelector } from "react-redux";
import IdeasDeck from "../../components/IdeasDeck";
import StatusDeck from "../../components/Status";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { FetchIdeasAsync, actions } from "../../redux/slice";

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.getIdeas.loading);
  const allIdeas = useSelector(
    (state: RootState) => state.getIdeas.ideasResponse.ideasData
  );

  const fetchIdeas = () => dispatch(FetchIdeasAsync());

  const filterIdeas = (filterType: string) => {
    dispatch(actions.setFilteredStatus(filterType));
  };

  useEffect(() => {
    if (!allIdeas.length && !isLoading) {
      fetchIdeas();
    }
  }, [dispatch, allIdeas, isLoading]);

  if (isLoading) return <h2>Loading.....</h2>;

  return (
    <>
      <StatusDeck filterIdeas={filterIdeas} />
      <IdeasDeck ideas={allIdeas} />
    </>
  );
}
