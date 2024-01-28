import { Idea } from "../../../global/definations/types";

export interface Properties {
  handleDelete: (idea: Idea) => void;
  ideas: Idea[] | null;
}
