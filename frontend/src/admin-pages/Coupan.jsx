export default function Coupons() {
  const coupons = [
    { code: "NEWYEAR25", discount: "25%", validTill: "2026-01-10" },
    { code: "WELCOME50", discount: "50%", validTill: "2026-01-31" },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-xl min-h-screen">
      <h2 className="font-bold text-xl mb-4">Coupons / Offers</h2>
      <ul className="space-y-2">
        {coupons.map((c, i) => (
          <li key={i} className="bg-white p-4 rounded shadow flex justify-between">
            <span>{c.code}</span>
            <span>{c.discount}</span>
            <span>Valid Till: {c.validTill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
