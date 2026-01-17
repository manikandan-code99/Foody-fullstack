import StatsCard from "../admin-pages/StatsCard";
import SalesChart from "../admin-pages/SalesChart";

export default function Sales() {
  // Example stats
  const stats = [
    { title: "Total Orders", value: 512 },
    { title: "Total Revenue", value: "₹1,24,500" },
    { title: "Pending Orders", value: 12 },
    { title: "Canceled Orders", value: 3 },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} title={stat.title} value={stat.value} />
        ))}
      </div>

      {/* Sales Chart */}
      <SalesChart />
    </div>
  );
}
