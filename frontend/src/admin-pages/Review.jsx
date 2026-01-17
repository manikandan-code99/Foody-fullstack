export default function Reviews() {
  const reviews = [
    { customer: "John Doe", rating: 5, comment: "Amazing food!" },
    { customer: "Jane Smith", rating: 4, comment: "Good, but a bit slow delivery." },
    { customer: "Bob Johnson", rating: 3, comment: "Average experience." },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-xl min-h-screen">
      <h2 className="font-bold text-xl mb-4">Customer Reviews</h2>
      <ul className="space-y-4">
        {reviews.map((r, i) => (
          <li key={i} className="bg-white p-4 rounded shadow">
            <p className="font-semibold">{r.customer} - {r.rating} ⭐</p>
            <p>{r.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
