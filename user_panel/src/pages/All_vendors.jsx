export default function All_vendors() {
  const restaurants = [
    {
      img: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg",
      name: "Organic Arcadian Food",
      rating: 4.5,
    },
    {
      img: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
      name: "Aromi Lounge",
      rating: 4.2,
    },
    {
      img: "https://images.pexels.com/photos/4109084/pexels-photo-4109084.jpeg",
      name: "Tasty Food Pizza",
      rating: 4.7,
    },
    {
      img: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg",
      name: "Organic Arcadian Food",
      rating: 4.5,
    },
    {
      img: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
      name: "Aromi Lounge",
      rating: 4.2,
    },
    {
      img: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
      name: "Aromi Lounge",
      rating: 4.2,
    },
  ];

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="max-w-8xl mx-auto flex">
        {/* LEFT SIDEBAR */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen px-4 pt-6">
          {/* Top title */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-gray-800">New title</h2>
            <div className="mt-1 h-[3px] w-8 bg-yellow-400" />
          </div>

          {/* Toggles (dummy) */}
          <div className="space-y-3 text-xs text-gray-800">
            <div className="flex items-center justify-between">
              <span>Near By Me</span>
              <div className="w-10 h-5 bg-gray-200 rounded-full" />
            </div>
            <div className="flex items-center justify-between">
              <span>Delivery</span>
              <div className="w-10 h-5 bg-gray-200 rounded-full" />
            </div>
            <div className="flex items-center justify-between">
              <span>Pickup</span>
              <div className="w-10 h-5 bg-gray-200 rounded-full" />
            </div>
          </div>

          {/* Search by food */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-800">
              Search By Food
            </h3>
            <div className="mt-1 h-[3px] w-8 bg-yellow-400" />

            <div className="mt-4">
              <input
                type="text"
                placeholder="Search categories..."
                className="w-full border border-gray-300 px-3 py-2 text-xs outline-none"
              />
            </div>

            <div className="mt-4 space-y-6 text-xs text-gray-700  max-h-[420px] pr-1">
              {[
                "Appetizers",
                "Beverages",
                "Chicken",
                "Chinese",
                "Breakfast",
                "Uncategorized",
                "BBQ",
                "Salads",
                "New Arrival",
                "Desserts",
                "Happy Meal",
                "Hi Tea",
                "Soups",
                "Deals",
                "Rolls",
                "Chow Mein",
                
              ].map((item, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input type="radio" className="accent-yellow-400" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT MAIN AREA */}
        <main className="flex-1 bg-[#f5f5f5] px-6 pt-4 pb-10">
          {/* Banner */}
          <div className="w-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg"
              alt="banner"
              className="w-full h-40 object-cover"
            />
          </div>

          {/* Search input + button */}
          <div className="mt-4 flex">
            <input
              type="text"
              placeholder="Search by restaurants name enter at least 3 characters..."
              className="flex-1 bg-white px-4 py-3 text-sm outline-none border border-r-0 border-gray-200"
            />
            <button className="w-40 bg-[#ffd400] hover:bg-[#f5c800] text-gray-900 font-semibold text-sm border border-gray-200">
              Search
            </button>
          </div>

          {/* Title */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900">
              14 + Restaurants
            </h2>
            <div className="mt-2 h-[3px] w-14 bg-yellow-400" />
            <div className="mt-1 h-[3px] w-5 bg-yellow-400" />
          </div>

          {/* Restaurant cards row */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {restaurants.map((res, i) => (
              <div key={i} className="bg-white shadow-sm border border-gray-200">
                <img
                  src={res.img}
                  alt={res.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-3">
                  <p className="text-xs text-yellow-500 mb-1">
                    ★★★★☆ ({res.rating})
                  </p>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {res.name}
                  </h3>

                  {/* bottom bar placeholder (time + address row in screenshot) */}
                  <div className="mt-3 border-t border-gray-200 pt-2 text-[11px] text-gray-600">
                    <p>8:00 am – 11:30 pm</p>
                    <p>47 W 13th St, New York</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}