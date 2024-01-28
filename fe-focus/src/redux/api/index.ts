import axios from "axios";
import { BASE_URL } from "../definations/constants";
import { Idea } from "../../global/definations/types";

export const fetchIdeas = async () => {
  return axios.get(`${BASE_URL}/ideasnew`);
};

export const addNewIdea = async (idea: Idea) => {
  return axios.post(`${BASE_URL}/ideasnew`, idea);
};

export const updateIdea = async (idea: Idea) => {
  return axios.patch(`${BASE_URL}/ideasnew`, idea);
};
