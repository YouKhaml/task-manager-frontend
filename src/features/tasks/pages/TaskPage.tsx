import { useState } from "react";
import TaskTable from "../components/TaskTable";
import { useTasks } from "../hooks/useTasks";
import { Plus } from "lucide-react";
import AddTaskModal from "../components/AddTaskModal";
import type { Task } from "../types/task";
import ViewTaskModal from "../components/ViewTaskModal";

export default function TaskPage() {
  const {
    tasks,
    isFetching,
    fetchError,
    createTask,
    fetchTaskById,
    deleteTask,
  } = useTasks();

  const [open, setOpen] = useState(false);
  const[openView,setOpenView]=useState(false)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // ========================
  // VIEW TASK DETAILS
  // ========================
  const handleViewTask = async (task: Task) => {
    try {
      const fullTask = await fetchTaskById(task.id);
      setSelectedTask(fullTask);
      console.log("TASK DETAILS:", fullTask);
      setOpenView(true)
      console.log("open View",openView);
      // 👉 ouvrir modal détails ici
      
    } catch {
      // erreur gérée dans le hook
    }
  };

  // ========================
  // EDIT TASK
  // ========================
  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    console.log("EDIT TASK:", task);
    // 👉 ouvrir modal édition ici
  };

  // ========================
  // DELETE TASK
  // ========================
  const handleDeleteTask = async (task: Task) => {
    const confirmed = window.confirm(
      `Voulez-vous supprimer la tâche "${task.titre}" ?`
    );
    if (!confirmed) return;

    await deleteTask(task.id);
  };

  if (isFetching) {
    return <div className="p-6">Chargement...</div>;
  }

  return (
    <>
      {/* HEADER */}
      <div className="h-16 px-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Gestion des tâches</h2>
          <p className="text-sm text-gray-500">
            Gérez et suivez toutes vos tâches
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={16} />
          Nouvelle tâche
        </button>
      </div>

      {fetchError && (
        <div className="text-red-600 px-6 py-2">
          Erreur de chargement des tâches
        </div>
      )}

      {/* CONTENT */}
      <main className="flex-1 p-6 space-y-4">
        <AddTaskModal
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={createTask}
        />
         
        <TaskTable
          tasks={tasks}
          onView={handleViewTask}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
        <ViewTaskModal 
          open={openView}
           onClose={() => setOpenView(false)}
       />
      </main>
    </>
  );
}
