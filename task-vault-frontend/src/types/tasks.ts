export interface Task {
  _id: string;
  title: string;
  description?: string;
  status: 'PENDING' | 'COMPLETED';
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskInput {
  title: string;
  description?: string;
}

export interface TaskFormProps {
  onAdd: (task: CreateTaskInput) => void;
}
export interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
}

export interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
}