import { formatDateFR } from "../../../utils/formatDate";
import { STATUT_COLORS, PRIORITE_COLORS } from "../../../utils/taskColors";
import { STATUT_LABELS , PRIORITE_LABELS } from "../../../utils/taskLabels";
import { STATUT_ICONS } from "../../../utils/taskStatusIcons";
import type { Task } from "../types/task";
import TaskActionsDropdown from "./TaskActionsDropdown";
import { Calendar } from "lucide-react";


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
              <td className="p-3 font-medium">
                <div className="flex items-center gap-2">
                  {(() => {
                      const Icon = STATUT_ICONS[task.statut].icon;
                      return (
                        <Icon
                          size={14}
                          className={STATUT_ICONS[task.statut].className}
                        />
                      );
                    })()
                  }
                  <span className="truncate max-w-[220px]">
                    {task.titre}
                  </span>
                </div>
              </td>

              <td className="max-w-[200px]">
                <p className="line-clamp-2">
                  {task.description || "-"}
                </p>
              </td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium
                  ${STATUT_COLORS[task.statut]}`}
                >
                {STATUT_LABELS[task.statut]}
                </span>
              </td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium
                  ${PRIORITE_COLORS[task.priorite]}`}
                >
                {PRIORITE_LABELS[task.priorite]}
                </span>
              </td>

              <td>
                <div className="flex items-center gap-2">
                  {/* DATE */}
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full
                      text-xs font-medium
                      ${
                        task.enRetard
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-700"
                      }`}
                  >
                    <Calendar size={14} />
                    {formatDateFR(task.dateFin)}
                  </span>

                  {/* BADGE EN RETARD */}
                  {task.enRetard && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold
                      bg-red-500 text-white">
                      En retard
                    </span>
                  )}
                </div>
              </td>
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
