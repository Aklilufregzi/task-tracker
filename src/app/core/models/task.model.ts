export interface Task {
  id: number;
  title: string;
  description: string;
  status: boolean;
  project: number | string;
  dueDate?: Date;
}
