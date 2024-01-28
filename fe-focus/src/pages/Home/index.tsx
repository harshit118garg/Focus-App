import { useDispatch, useSelector } from "react-redux";
import IdeasDeck from "../../components/IdeasDeck";
import StatusDeck from "../../components/Status";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { actions } from "../../redux/slice";
import { Idea, Status } from "../../global/definations/types";
import { DeleteIdeaAsync, FetchIdeasAsync } from "../../redux/api/controllers";

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.getIdeas.loading);
  const allIdeas = useSelector(
    (state: RootState) => state.getIdeas.ideasResponse.ideasData
  );

  const fetchIdeas = () => dispatch(FetchIdeasAsync());

  const filterIdeas = (filterType: Status) => {
    dispatch(actions.setFilteredStatus(filterType));
  };

  useEffect(() => {
    if (!allIdeas.length && !isLoading) {
      fetchIdeas();
    }
  }, [dispatch, allIdeas, isLoading]);

  const handleDelete = (idea: Idea) => {
    console.log("idea to be deleted", idea);
    const confirmation = confirm(
      "are you sure you want to move this idea to discared....?"
    );
    if (confirmation) {
      dispatch(DeleteIdeaAsync(idea));
    }
  };

  if (isLoading) return <h2>Loading.....</h2>;

  return (
    <>
      <StatusDeck filterIdeas={filterIdeas} />
      <IdeasDeck ideas={allIdeas} handleDelete={handleDelete} />
    </>
  );
}
