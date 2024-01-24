import { Status } from "../../../global/definations/types";

export interface Properties {
  filterIdeas: (filterType: Status) => void;
}
