import { useTasks } from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function TasksPage() {
  const { tasks, loading, error, addTask, removeTask } = useTasks();

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-4 rounded shadow">
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={removeTask} />
    </div>
  );
}
