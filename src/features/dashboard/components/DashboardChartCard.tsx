interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function DashboardChartCard({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <div className="bg-white rounded-xl border p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        {subtitle && (
          <p className="text-xs text-gray-500">{subtitle}</p>
        )}
      </div>

      {children}
    </div>
  );
}
