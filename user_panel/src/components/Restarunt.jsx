import burger from '../assets/burger image.jpeg';

export default function RestaurantCard({ name, time, rating, location }) {
  const fullStars = Math.round(rating);

  return (
    
    <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
      <img
        src={burger}
        alt={name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-2">

        {/* Time */}
        <div className="flex items-center text-sm text-gray-500 gap-2">
          <span className="text-yellow-400">⏱</span>
          <span>{time}</span>
        </div>

        {/* Name */}
        <h3 className="text-gray-900 font-semibold text-lg">{name}</h3>

        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`text-black text-sm ${i < fullStars ? "opacity-100" : "opacity-30"}`}>
              ★
            </span>
          ))}
        </div>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-500 gap-2">
          <span className="text-yellow-500">📍</span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );    
}