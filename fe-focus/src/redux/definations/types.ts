import { Idea } from "../../global/definations/types";

export interface State {
  ideasResponse: ApiData;
  loading: boolean;
  error: boolean;
  filteredStatus: string;
}

export interface ApiData {
  ideasData: Idea[];
}
