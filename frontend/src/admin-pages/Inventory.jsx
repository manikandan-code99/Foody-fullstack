export default function Inventory() {
  const items = [
    { name: "Tomatoes", quantity: 20 },
    { name: "Cheese", quantity: 10 },
    { name: "Chicken", quantity: 15 },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-xl min-h-screen">
      <h2 className="font-bold text-xl mb-4">Inventory</h2>
      <table className="w-full bg-white rounded shadow table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">Item</th>
            <th className="py-2 px-4">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i, idx) => (
            <tr key={idx} className="border-b">
              <td className="py-2 px-4">{i.name}</td>
              <td className="py-2 px-4">{i.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
