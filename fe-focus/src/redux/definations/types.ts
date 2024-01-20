import { Idea } from "../../global/definations/types";

export interface State {
  ideasResponse: Idea[];
  loading: boolean;
  error: boolean;
}
