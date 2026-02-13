import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DashboardChartCard from "./DashboardChartCard";
import { STATUT_TACHE, type Task } from "../../tasks/types/task";



function buildPieData(tasks: Task[]) {
  const total = tasks.length || 1;

  const count = {
    EN_COURS: 0,
    TERMINEE: 0,
    A_FAIRE: 0,
  };

  tasks.forEach((task) => {
    switch (task.statut) {
      case STATUT_TACHE.EN_COURS:
        count.EN_COURS++;
        break;
      case STATUT_TACHE.TERMINEE:
        count.TERMINEE++;
        break;
      case STATUT_TACHE.A_FAIRE:
        count.A_FAIRE++;
        break;
    }
  });

  return [
    {
      name: "En cours",
      value: Math.round((count.EN_COURS / total) * 100),
      color: "#3b82f6",
    },
    {
      name: "Terminées",
      value: Math.round((count.TERMINEE / total) * 100),
      color: "#22c55e",
    },
    {
      name: "À faire",
      value: Math.round((count.A_FAIRE / total) * 100),
      color: "#6b7280",
    },
  ];
}


interface Props {
  tasks: Task[];
}

export default function TaskStatusPieChart({ tasks }: Props) {
  const data = buildPieData(tasks);

  return (
    <DashboardChartCard
      title="📊 Répartition des tâches"
      subtitle="Distribution par statut"
    >
      <div className="h-64 flex justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
     <div className="mt-4 flex justify-center gap-6 text-sm">
  {data.map((item, index) => (
    <div key={item.name} className="flex items-center gap-2">
      <span
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: item.color }}
      />
      <span className="font-medium text-gray-700">
        {item.name}
      </span>
      <span className="font-semibold">
        {item.value}%
      </span>

      {index < data.length - 1 && (
        <span className="text-gray-300">•</span>
      )}
    </div>
  ))}
</div>


    </DashboardChartCard>
  );
}
