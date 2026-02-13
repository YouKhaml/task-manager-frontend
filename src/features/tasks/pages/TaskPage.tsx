import { useState,useEffect } from "react";
import TaskTable from "../components/TaskTable";
import { useTasks } from "../hooks/useTasks";
import { Plus } from "lucide-react";
import AddTaskModal from "../components/AddTaskModal";
import type { Task } from "../types/task";
import ViewTaskModal from "../components/ViewTaskModal";
import UpdateTaskModal from "../components/UpdateTaskModal";
import TaskFilters from "../components/TaskFilters";
import { usePagination } from "../../../hooks/usePagination";
import Pagination from "../../../components/Pagination";


export default function TaskPage() {
  const {
    tasks,
    isFetching,
    fetchError,
    createTask,
    fetchTaskById,
    updateTask,
    deleteTask,

  } = useTasks();

  const [openAddTask, setOpenAddTask] = useState(false);
  const[openView,setOpenView]=useState(false)
  const [openUpdate, setOpenUpdate] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  
 






  // ========================
  // SEARCH TASK 
  // ========================
  const [search, setSearch] = useState("");
  const [statut, setStatut] = useState("");
  const [priorite, setPriorite] = useState("");

  const filteredTasks = tasks.filter((task) => {
  const matchSearch =
    task.titre.toLowerCase().includes(search.toLowerCase()) ||
    (task.description ?? "").toLowerCase().includes(search.toLowerCase());

  const matchStatut = statut ? task.statut === statut : true;
  const matchPriorite = priorite ? task.priorite === priorite : true;

  return matchSearch && matchStatut && matchPriorite;
});



  const {
  currentPage,
  totalPages,
  paginatedData: paginatedTasks,
  setCurrentPage,
} = usePagination(filteredTasks, 5);


  useEffect(() => {
  if (currentPage !== 1) {
    setCurrentPage(1);
  }
}, [search, statut, priorite]);



  // ========================
  // VIEW TASK DETAILS
  // ========================
  const handleViewTask = async (task: Task) => {
    const fullTask = await fetchTaskById(task.id);
    setSelectedTask(fullTask);
    setOpenUpdate(false);
    setOpenView(true);
  };

  // ========================
  // EDIT TASK
  // ========================
  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setOpenView(false);
    setOpenUpdate(true);

    console.log('selected task :',selectedTask)

    
    
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
          onClick={() => setOpenAddTask(true)}
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
    
        <TaskFilters
          search={search}
          statut={statut}
          priorite={priorite}
          onSearchChange={setSearch}
          onStatutChange={setStatut}
          onPrioriteChange={setPriorite}
        />
         
        <AddTaskModal
          open={openAddTask}
          onClose={() => setOpenAddTask(false)}
          onSubmit={createTask}
        />

        <TaskTable
          tasks={paginatedTasks}
          onView={handleViewTask}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
        {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        )}
        
        {/* VIEW MODAL */}
        {selectedTask && (
          <ViewTaskModal
            open={openView}
            task={selectedTask}
            onClose={() => setOpenView(false)}
          />
        )}

        {/* UPDATE MODAL */}
        {selectedTask && (
          <UpdateTaskModal
            open={openUpdate}
            task={selectedTask}      // ✅ OBLIGATOIRE
            taskId={selectedTask.id}
            onClose={() => setOpenUpdate(false)}
            onSubmit={updateTask}
          />
        )}
      </main>

    </>
  );
  
  
}
