import TaskItem from "./TaskItem";
import type { Task, TaskListProps } from "../types/tasks";

export default function TaskList({ tasks, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500">No tasks found</p>;
  }

  return (
    <ul className="divide-y">
      {tasks.map((task: Task) => (
        <TaskItem key={task._id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
}
