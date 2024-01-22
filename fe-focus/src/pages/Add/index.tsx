import { useState } from "react";
import FormDeck from "../../components/FormDeck";
import { Idea } from "../../global/definations/types";

export default function AddNew() {
  const [newIdea, setNewIdea] = useState<Idea>({
    title: "",
    description: "",
    status: "",
    id: Date.now(),
  });

  const handleAddNewIdea = () => {};

  return (
    <>
      <FormDeck ideaProp={newIdea} manageIdea={handleAddNewIdea} />
    </>
  );
}
