import { statuses } from "../global/definations/constants";

export const StatusColor = (statusString: String | null) => {
  return statuses.filter((status) => status.value === statusString)[0].variant;
};
