import type { Task } from "../types/task";
import ViewTaskForm from "./ViewTaskForm";

interface Props {
  open: boolean;
  task: Task | null;
  onClose: () => void;
  
}

export default function ViewTaskModal({ open,task, onClose  }: Props) {
  if (!open || !task) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-11/12 sm:w-full max-w-md p-4 relative max-h-md">

        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold">Détail de la tâche</h3>
            <p className="text-sm text-gray-500">
                  Informations complètes
            </p>
          </div>
          
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        <ViewTaskForm task={task} onCancel={onClose} />
      </div>
    </div>
  );
}
