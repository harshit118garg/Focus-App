import { useDispatch, useSelector } from "react-redux";
import IdeasDeck from "../../components/IdeasDeck";
import StatusDeck from "../../components/Status";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { FetchIdeasAsync } from "../../redux/slice";

export default function HomePage() {
  const isLoading = useSelector((state: RootState) => state.getIdeas.loading);
  const allIdeas = useSelector(
    (state: RootState) => state.getIdeas.ideasResponse.ideasData
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!allIdeas.length && !isLoading) {
      dispatch(FetchIdeasAsync());
    }
  }, [dispatch, allIdeas, isLoading]);

  if (isLoading) return <h2>Loading.....</h2>;

  return (
    <>
      <StatusDeck />
      <IdeasDeck ideas={allIdeas} />
    </>
  );
}
