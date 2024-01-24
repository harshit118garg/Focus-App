export interface Status {
  label: string;
  value: string;
  variant: string;
}

export interface Idea {
  id: number;
  title: string;
  description: string;
  status: Status | null;
}
