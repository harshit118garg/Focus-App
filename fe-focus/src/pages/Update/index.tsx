import { useNavigate, useParams } from "react-router-dom";
import FormDeck from "../../components/FormDeck";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useState } from "react";
import { Idea } from "../../global/definations/types";
import { UpdateIdeaAsync } from "../../redux/api/controllers";

export default function UpdateIdea() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const allIdeas = useSelector(
    (state: RootState) => state.getIdeas.ideasResponse.ideasData
  );
  const { selectedStatus } = useSelector((state: RootState) => state.getIdeas);

  const updateIdea = allIdeas.filter((idea) => idea.id === Number(id))[0];
  const [ideaVal, setIdeaVal] = useState<Idea>(updateIdea);

  const updateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIdeaVal((prevState: Idea) => {
      return { ...prevState, [name]: value };
    });
    if (selectedStatus !== null) {
      setIdeaVal((prevState: Idea) => {
        return { ...prevState, status: selectedStatus };
      });
    }
  };

  const UpdateClick = () => {
    dispatch(UpdateIdeaAsync(ideaVal));
    navigate("/");
  };

  return (
    <>
      <FormDeck
        ideaProp={ideaVal}
        clickHandler={UpdateClick}
        manageIdea={updateChange}
      />
    </>
  );
}
