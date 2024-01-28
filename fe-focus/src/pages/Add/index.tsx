import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormDeck from "../../components/FormDeck";
import { Idea } from "../../global/definations/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { actions } from "../../redux/slice";
import { AddNewIdeaAsync } from "../../redux/api/controllers";

export default function AddNew() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

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

  const addNewIdea = () => {
    dispatch(actions.setNewIdea(newIdea));
    dispatch(AddNewIdeaAsync(newIdea));
    setNewIdea({ title: "", description: "", id: Date.now(), status: null });
    navigate("/");
  };

  return (
    <>
      <FormDeck
        ideaProp={newIdea}
        manageIdea={handleAddNewIdea}
        clickHandler={addNewIdea}
      />
    </>
  );
}
