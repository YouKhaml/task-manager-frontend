interface DashboardCardProps {
  title: string;
  value: number;
  subtitle?: string;
  icon?: React.ReactNode;
  color?: string;
}

export default function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  color = "border-gray-300",
}: DashboardCardProps) {
  return (
    <div
      className={`bg-white rounded-xl border-l-4 ${color} p-5 shadow-sm flex justify-between items-center`}
    >
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {subtitle && (
          <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
        )}
      </div>

      {icon && (
        <div className="text-gray-400">
          {icon}
        </div>
      )}
    </div>
  );
}
