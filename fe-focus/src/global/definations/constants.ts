import { Status } from "./types";

const NOT_STARTED = "Not Started";
const IN_PROGRESS = "In Progress";
const IMPLEMENTED = "Implemented";

export { NOT_STARTED, IN_PROGRESS, IMPLEMENTED };

export const statuses: Status[] = [
  { label: NOT_STARTED, value: NOT_STARTED, variant: "secondary" },
  { label: IN_PROGRESS, value: IN_PROGRESS, variant: "info" },
  { label: IMPLEMENTED, value: IMPLEMENTED, variant: "success" },
];
