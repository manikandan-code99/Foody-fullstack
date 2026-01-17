export default function Orders() {
  const orders = [
    { id: 1, customer: "John Doe", date: "2025-12-15", amount: 450, status: "Pending" },
    { id: 2, customer: "Jane Smith", date: "2025-12-14", amount: 1200, status: "Completed" },
    { id: 3, customer: "Bob Johnson", date: "2025-12-13", amount: 700, status: "Cancelled" },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-xl min-h-screen">
      <h2 className="font-bold text-xl mb-4">Orders</h2>
      <table className="w-full table-auto bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Customer</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id} className="border-b">
              <td className="py-2 px-4">{o.id}</td>
              <td className="py-2 px-4">{o.customer}</td>
              <td className="py-2 px-4">{o.date}</td>
              <td className="py-2 px-4">₹{o.amount}</td>
              <td className={`py-2 px-4 font-semibold ${
                o.status === "Pending" ? "text-yellow-600" :
                o.status === "Completed" ? "text-green-600" :
                "text-red-600"
              }`}>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
