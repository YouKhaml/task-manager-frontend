import type { CreateTaskDto } from "../types/create-task.dto";
import AddTaskForm from "./AddTaskForm";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateTaskDto) => Promise<any>;
}

export default function AddTaskModal({ open, onClose, onSubmit }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-11/12 sm:w-full max-w-md p-4 relative max-h-md">

        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold">Nouvelle tâche</h3>
            <p className="text-sm text-gray-500">
                 Créez une nouvelle tâche pour rester organisé
            </p>
          </div>
          
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        <AddTaskForm
          onSubmit={async (data) => {
            await onSubmit(data);
            onClose(); // 👈 fermeture après succès
          }}
          onCancel={onClose}
        />
      </div>
    </div>
  );
}
