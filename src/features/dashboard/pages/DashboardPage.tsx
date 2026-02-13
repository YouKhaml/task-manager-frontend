import { useTasks } from "../../tasks/hooks/useTasks";
import DashboardStats from "../components/DashboardStats";
import TaskStatusPieChart from "../components/TaskStatusPieChart";
import WeeklyProductivityChart from "../components/WeeklyProductivityChart";

export default function DashboardPage (){
    const { tasks, isFetching } = useTasks();
     if (isFetching) return <div>Chargement...</div>;
    return(
        <div className="p-6 space-y-6">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <DashboardStats tasks={tasks} />
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <WeeklyProductivityChart tasks={tasks} />

                <TaskStatusPieChart tasks={tasks} />
             </div>
        </div>
    )
    

}