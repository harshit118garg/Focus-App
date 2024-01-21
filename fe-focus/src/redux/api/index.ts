import axios from "axios";
import { BASE_URL } from "../definations/constants";

export const fetchIdeas = async () => {
  return axios.get(`${BASE_URL}/ideasnew`);
};
