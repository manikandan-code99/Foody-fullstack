export default function Reports() {
  // Sample report data
  const reports = [
    { date: "2025-12-15", orders: 50, revenue: 12500 },
    { date: "2025-12-14", orders: 42, revenue: 10200 },
    { date: "2025-12-13", orders: 35, revenue: 8700 },
    { date: "2025-12-12", orders: 60, revenue: 15000 },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-xl min-h-screen">
      <h2 className="font-bold text-xl mb-4">Reports</h2>

      <table className="w-full table-auto bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Orders</th>
            <th className="py-2 px-4">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r, i) => (
            <tr key={i} className="border-b">
              <td className="py-2 px-4">{r.date}</td>
              <td className="py-2 px-4">{r.orders}</td>
              <td className="py-2 px-4">₹{r.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
