import { Idea, Status } from "../../global/definations/types";

export interface State {
  ideasResponse: ApiData;
  loading: boolean;
  error: boolean;
  filteredStatus: Status | null;
  selectedStatus: Status | null;
  newIdea: Idea | null;
}

export interface ApiData {
  ideasData: Idea[];
}
