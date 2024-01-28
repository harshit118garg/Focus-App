import { useParams } from "react-router-dom";
import FormDeck from "../../components/FormDeck";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";
import { Idea } from "../../global/definations/types";

export default function UpdateIdea() {
  const { id } = useParams();
  const allIdeas = useSelector(
    (state: RootState) => state.getIdeas.ideasResponse.ideasData
  );
  const updateIdea = allIdeas.filter((idea) => idea.id === Number(id))[0];
  const [ideaVal, setIdeaVal] = useState<Idea>(updateIdea);

  const updateChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const UpdateClick = () => {};

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
