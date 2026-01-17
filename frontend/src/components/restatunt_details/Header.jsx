import React, { useState, useRef, useEffect } from "react";


export default function Header({
  name = "Aromi Lounge",
  address = "1784 Willow Creek Drive, TX, United States (US)",
  rating = 4,
  coverImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=80",
  avatarImage = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
}) {
  const [hoursOpen, setHoursOpen] = useState(false);
  const wrapperRef = useRef();

  // close dropdown when clicked outside
  useEffect(() => {
    function onDoc(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setHoursOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const stars = Array.from({ length: 5 }).map((_, i) => i < rating);

  return (
    <header className="w-full">
      {/* Cover image */}
      <div className="w-full">
        <img
          src={coverImage}
          alt="cover"
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Overlay white card */}
      <div className="max-w-5xl mx-auto -mt-16 px-4">
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0 -mt-12 md:mt-0">
            <div className="relative">
              <div className="w-32 h-32 md:w-28 md:h-28 rounded-full ring-4 ring-white bg-white flex items-center justify-center">
                <img
                  src={avatarImage}
                  alt="avatar"
                  className="w-28 h-28 md:w-24 md:h-24 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Business info */}
          <div className="flex-1 w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mt-9">
                      {stars.map((on, idx) => (
                        <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill={on ? "#E6E7EA" : "none"} stroke="#D1D5DB" strokeWidth="1.5" className="opacity-90">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                <h1 className="text-2xl md:text-3xl font-extrabold text-black leading-tight mt-2">
                  {name}
                </h1>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                  {/* location icon */}
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{address}</span>
                </div>
              </div>

              {/* Working Hours button (align right on md+) */}
              <div className="flex-shrink-0" ref={wrapperRef}>
                <button
                  onClick={() => setHoursOpen((s) => !s)}
                  className="flex items-center mt-4 gap-3 bg-[#FEC400] hover:bg-[#e0b500] text-black font-semibold px-6 py-3 rounded-md shadow-sm transition"
                  aria-expanded={hoursOpen}
                  aria-haspopup="true"
                >
                  <span>Working Hours</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" className="transform" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </button>

                {/* dropdown */}
                <div
                  className={`absolute right-4 mt-2 w-64 bg-white border border-gray-200 rounded shadow-md transform transition-all origin-top ${
                    hoursOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="p-3">
                    {[
                      { day: "Today", time: "2:00 PM - 12:00 AM", highlight: true },
                      { day: "Monday", time: "12:00 PM - 12:00 AM" },
                      { day: "Tuesday", time: "12:00 PM - 12:00 AM" },
                      { day: "Wednesday", time: "12:00 PM - 12:00 AM" },
                      { day: "Thursday", time: "12:00 PM - 12:00 AM" },
                      { day: "Saturday", time: "2:00 PM - 12:00 AM" },
                      { day: "Sunday", time: "2:00 PM - 12:00 AM" },
                    ].map((h) => (
                      <div key={h.day} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <div className={h.highlight ? "text-yellow-500 font-semibold" : "text-gray-700"}>{h.day}</div>
                        <div className="text-sm text-gray-600">{h.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

     
           
          </div>
        </div>
      </div>
    </header>
  );
}
