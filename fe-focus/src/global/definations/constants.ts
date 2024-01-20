import { Status } from "./types";

const NOT_STARTED = "Not Started";
const IN_PROGRESS = "In Progress";
const IMPLEMENTED = "Implemented";
const DISCARDED = "Discarded";

export { NOT_STARTED, IN_PROGRESS, IMPLEMENTED, DISCARDED };

export const statuses: Status[] = [
  { label: NOT_STARTED, value: NOT_STARTED },
  { label: IN_PROGRESS, value: IN_PROGRESS },
  { label: IMPLEMENTED, value: IMPLEMENTED },
  { label: DISCARDED, value: DISCARDED },
];
