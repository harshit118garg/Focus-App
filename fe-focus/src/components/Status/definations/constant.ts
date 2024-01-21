import { statuses } from "../../../global/definations/constants";
import { Status } from "../../../global/definations/types";

export const buttonActiveClass = `border rounded border-2 border-white p-1`;

export const statusButtons: Status[] = [
  { label: "All", value: "All", variant: "primary" },
  ...statuses,
];
