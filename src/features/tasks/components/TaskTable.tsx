import type { Task } from "../types/task";
import TaskActionsDropdown from "./TaskActionsDropdown";

interface Props {
  tasks: Task[];
  onView: (task: Task) => void;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
}

export default function TaskTable({
  tasks,
  onView,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md">
      {/* HEADER */}
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">
          Liste des tâches ({tasks.length})
        </h2>
        <p className="text-sm text-gray-500">
          Cliquez sur une tâche pour afficher les actions
        </p>
      </div>
      <div className="m-4">
         {/* TABLE */}
      <table className="w-full text-sm  ">
        <thead className="border-b border-gray-300 bg-gray-50">
          <tr className="text-left text-gray-600">
            <th className="p-3">Titre</th>
            <th>Description</th>
            <th>Statut</th>
            <th>Priorité</th>
            <th>Date limite</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              className="border-b border-gray-300 hover:bg-gray-50 transition"
            >
              <td className="p-3 font-medium">{task.titre}</td>
              <td>{task.description || "-"}</td>
              <td>{task.statut}</td>
              <td>{task.priorite}</td>
              <td>{task.dateFin}</td>

              {/* ACTIONS */}
              <td className="p-3 text-right">
                <TaskActionsDropdown
                  task={task}
                  onView={onView}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     
    </div>
  );
}
