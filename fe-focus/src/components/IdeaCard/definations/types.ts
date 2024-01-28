import { Idea } from "../../../global/definations/types";

export interface Properties {
  idea: Idea;
  deleteHandler: (idea: Idea) => void;
}
