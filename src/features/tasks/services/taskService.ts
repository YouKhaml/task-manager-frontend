import CustomAxios from "../../../services/customAxios";
import type { CreateTaskDto } from "../types/create-task.dto";
import type { Task } from "../types/task";

export const TaskService = {
  getAll: () =>
    CustomAxios.get<Task[]>("TACHE-SERVICE/tache/taches"),

  getTaskById: (id: number) =>
    CustomAxios.get<Task>(`TACHE-SERVICE/tache/tache/${id}`),

  createTask: (data: CreateTaskDto) =>
    CustomAxios.post<Task>("TACHE-SERVICE/tache/createTache", data),

  updateTask: (id: number, data: Partial<Task>) =>
    CustomAxios.put<Task>(
      `TACHE-SERVICE/tache/update_tache/${id}`,
      data
    ),

  delete: (id: number) =>
    CustomAxios.delete(
      `TACHE-SERVICE/tache/delete/${id}`
    ),
};
