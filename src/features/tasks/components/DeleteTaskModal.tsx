import { Trash2, X } from "lucide-react";
import type { Task } from "../types/task";

interface Props {
  open: boolean;
  task: Task | null;
  onClose: () => void;
  onConfirm: (taskId: string) => Promise<void>;
}

export default function DeleteTaskModal({
  open,
  task,
  onClose,
  onConfirm,
}: Props) {
  if (!open || !task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 animate-fade-in">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-red-600">
            <Trash2 size={20} />
            <h3 className="text-lg font-semibold">
              Supprimer la tâche
            </h3>
          </div>

          <button onClick={onClose}>
            <X size={18} className="text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        {/* CONTENT */}
        <p className="text-sm text-gray-600 mb-6">
          Voulez-vous vraiment supprimer la tâche :
          <span className="font-semibold text-gray-900">
            {" "}“{task.titre}”
          </span> ?
          <br />
          Cette action est <span className="text-red-600 font-medium">
            irréversible
          </span>.
        </p>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100"
          >
            Annuler
          </button>

          <button
            onClick={async () => {
              await onConfirm(task.id);
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
