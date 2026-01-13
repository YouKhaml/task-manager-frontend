import { useState, useRef, useEffect } from "react";
import { Eye, Pencil, Trash2, MoreVertical } from "lucide-react";
import type { Task } from "../types/task";

interface Props {
  task: Task;
  onView: (task: Task) => void;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
}

export default function TaskActionsDropdown({
  task,
  onView,
  onEdit,
  onDelete,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Fermer quand on clique dehors
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="p-2 rounded-md hover:bg-gray-100"
      >
        <MoreVertical size={18} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg z-20">
          <button
            onClick={() => {
              onView(task);
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-50"
          >
            <Eye size={16} /> Voir détails
          </button>

          <button
            onClick={() => {
              onEdit(task);
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-50"
          >
            <Pencil size={16} /> Modifier
          </button>

          <button
            onClick={() => {
              onDelete(task);
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <Trash2 size={16} /> Supprimer
          </button>
        </div>
      )}
    </div>
  );
}
