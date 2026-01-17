


import StatsCard from "./StatsCard";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatsCard title="Orders" value="128" />
        <StatsCard title="Revenue" value="₹24,500" />
        <StatsCard title="Products" value="32" />
        <StatsCard title="Rating" value="4.6 ⭐" />
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-4">Sales Overview</h3>
        {/* Chart goes here */}
      </div>
    </>
  );
}

