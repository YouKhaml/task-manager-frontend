import { CheckCircle, Clock, AlertCircle, ListTodo } from "lucide-react";
import DashboardCard from "./DashboardCard";
import { STATUT_TACHE, type Task } from "../../tasks/types/task";


interface Props {
  tasks: Task[];
}

export default function DashboardStats({ tasks }: Props) {
  const doneTasks = tasks.filter(t => t.statut === STATUT_TACHE.TERMINEE);
  const inProgressTasks = tasks.filter(t => t.statut === STATUT_TACHE.EN_COURS);
  const lateTasks = tasks.filter(t => t.enRetard=== true);
  const totalTasks = tasks.length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <DashboardCard
        title="Tâches réalisées"
        value={doneTasks.length}
        subtitle={`${Math.round((doneTasks.length / totalTasks) * 100 || 0)}% de progression`}
        icon={<CheckCircle className="w-6 h-6 text-green-500" />}
        color="border-green-500"
      />

      <DashboardCard
        title="Tâches en cours"
        value={inProgressTasks.length}
        subtitle="En progression active"
        icon={<Clock className="w-6 h-6 text-blue-500" />}
        color="border-blue-500"
      />

      <DashboardCard
        title="Tâches en retard"
        value={lateTasks.length}
        subtitle="Nécessitent attention"
        icon={<AlertCircle className="w-6 h-6 text-red-500" />}
        color="border-red-500"
      />

      <DashboardCard
        title="Total des tâches"
        value={totalTasks}
        subtitle="Tâches actives"
        icon={<ListTodo className="w-6 h-6 text-purple-500" />}
        color="border-purple-500"
      />
    </div>
  );
}
