import { useEffect, useState, useCallback } from "react";
import * as tasksApi from "../api/tasks.api";
import type { Task, CreateTaskInput } from "../types/tasks";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadTasks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data: Task[] = await tasksApi.fetchTasks();
      setTasks(data);
    } catch (err) {
        if (err instanceof Error) {
            setError(err.message); } 
        else {
            setError("Something went wrong"); }
    } finally {
      setLoading(false);
    }
  }, []);

  const addTask = async (task: CreateTaskInput): Promise<void> => {
    await tasksApi.createTask(task);
    loadTasks();
  };

  const removeTask = async (id: string): Promise<void> => {
    await tasksApi.deleteTask(id);
    setTasks(prev => prev.filter((t: Task) => t._id !== id));
  };

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);
  
  return { tasks, loading, error, addTask, removeTask };
}