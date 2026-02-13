import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DashboardChartCard from "./DashboardChartCard";
import { STATUT_TACHE, type Task } from "../../tasks/types/task";

interface Props {
  tasks: Task[];
}



const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

function buildWeeklyData(tasks: Task[]) {
  const result = DAYS.map((day) => ({ day, value: 0 }));

  tasks.forEach((task) => {
    if (task.statut !== STATUT_TACHE.TERMINEE) return;

    const date = new Date(task.dateFin);
    const dayIndex = (date.getDay() + 6) % 7; 
    // JS: Dim=0 → Lun=0

    result[dayIndex].value += 1;
  });

  return result;
}


export default function WeeklyProductivityChart({ tasks }: Props) {
  const data = buildWeeklyData(tasks);

  return (
    <DashboardChartCard
      title="📈 Productivité hebdomadaire"
      subtitle="Tâches terminées par jour"
    >
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar
              dataKey="value"
              radius={[6, 6, 0, 0]}
              fill="#3b82f6"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashboardChartCard>
  );
}
