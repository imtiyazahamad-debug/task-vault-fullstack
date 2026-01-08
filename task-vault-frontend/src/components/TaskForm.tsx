import { useState } from "react";
import type { TaskFormProps  } from "../types/tasks";

export default function TaskForm({ onAdd }:TaskFormProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({ title, description });
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        className="w-full border rounded p-2 mb-2"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full border rounded p-2 mb-2"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded">
        Add Task
      </button>
    </form>
  );
}
