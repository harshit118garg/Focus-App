import React, { useState } from "react";
import FormDeck from "../../components/FormDeck";
import { Idea } from "../../global/definations/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function AddNew() {
  const [newIdea, setNewIdea] = useState<Idea>({
    title: "",
    description: "",
    status: null,
    id: Date.now(),
  });

  const { selectedStatus } = useSelector((state: RootState) => state.getIdeas);

  const handleAddNewIdea = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewIdea((prevState: Idea) => {
      return { ...prevState, [name]: value };
    });
    if (selectedStatus !== null) {
      setNewIdea((prevState: Idea) => {
        return { ...prevState, status: selectedStatus };
      });
    }
  };

  return (
    <>
      <FormDeck ideaProp={newIdea} manageIdea={handleAddNewIdea} />
    </>
  );
}
