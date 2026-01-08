import type { TaskItemProps } from "../types/tasks";

export default function TaskItem({ task, onDelete }: TaskItemProps) {
  return (
    <li className="flex justify-between items-center py-2">
      <div>
        <p className="font-semibold">{task.title}</p>
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>

      <button
        onClick={() => onDelete(task._id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
}
