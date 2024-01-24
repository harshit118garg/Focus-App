import { Idea } from "../../../global/definations/types";

export interface Properties {
  ideaProp: Idea;
  manageIdea: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
