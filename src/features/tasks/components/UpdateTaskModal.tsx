import type { Task } from "../types/task";
import UpdateTaskForm from "./UpdateTaskForm";

interface Props {
  open: boolean;
  taskId: string;
  task: Task; // ✅ AJOUT
  onClose: () => void;
  onSubmit: (id:string,data: Partial<Task>) => Promise<any>;
}

export default function UpdateTaskModal({ open,task,taskId, onClose, onSubmit }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-11/12 sm:w-full max-w-md p-4 relative max-h-md">

        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold">Modifier la tâche</h3>
            <p className="text-sm text-gray-500">
                   tâche pour rester organisé
            </p>
          </div>
          
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button> 
        </div>

        <UpdateTaskForm
          taskId ={taskId}
          task={task}        // ✅ ICI

          onSubmit={async (id,data) => {
            await onSubmit(id,data);
            onClose(); // 👈 fermeture après succès
          }}
          onCancel={onClose}
        />
      </div>
    </div>
  );
}
