import { useEffect, useState, useCallback } from "react";
import type { Task } from "../types/task";
import { TaskService } from "../services/taskService";
import type { CreateTaskDto } from "../types/create-task.dto";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fetchError, setFetchError] = useState<Error | null>(null);
  const [actionError, setActionError] = useState<Error | null>(null);

  // ========================
  // FETCH TASKS
  // ========================
  const fetchTasks = useCallback(async () => {
    setIsFetching(true);
    setFetchError(null);

    try {
      const res = await TaskService.getAll();
      setTasks(res.data);
    } catch (e) {
      setFetchError(e as Error);
    } finally {
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // ========================
  // CREATE TASK
  // ========================
  const createTask = async (data: CreateTaskDto): Promise<Task> => {
    setIsSubmitting(true);
    setActionError(null);

    try {
      const res = await TaskService.createTask(data);
      const createdTask = res.data;

      setTasks(prev => [createdTask, ...prev]);
      return createdTask;
    } catch (e) {
      setActionError(e as Error);
      throw e;
    } finally {
      setIsSubmitting(false);
    }
  };

  // ========================
  // UPDATE TASK
  // ========================
  const updateTask = async (
    id: number,
    data: Partial<Task>
  ): Promise<Task> => {
    setIsSubmitting(true);
    setActionError(null);

    try {
      const res = await TaskService.updateTask(id, data);
      const updatedTask = res.data;

      setTasks(prev =>
        prev.map(task =>
          task.id === id ? updatedTask : task
        )
      );

      return updatedTask;
    } catch (e) {
      setActionError(e as Error);
      throw e;
    } finally {
      setIsSubmitting(false);
    }
  };

  // ========================
  // DELETE TASK
  // ========================
  const deleteTask = async (id: number): Promise<void> => {
    setIsSubmitting(true);
    setActionError(null);

    try {
      await TaskService.delete(id);

      setTasks(prev =>
        prev.filter(task => task.id !== id)
      );
    } catch (e) {
      setActionError(e as Error);
      throw e;
    } finally {
      setIsSubmitting(false);
    }
  };

  // ========================
  // FETCH TASK BY ID
  // ========================
  const fetchTaskById = async (id: number): Promise<Task> => {
    setActionError(null);

    try {
      const res = await TaskService.getTaskById(id);
      return res.data;
    } catch (e) {
      setActionError(e as Error);
      throw e;
    }
  };

  return {
    tasks,
    isFetching,
    isSubmitting,
    fetchError,
    actionError,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
    fetchTaskById,
  };
}
