import RestaurantCard from "./Restarunt"
// import BannerCard from "./RestaruntBannercard";
import blu from '../assets/cbb.png';
// import sampleData from "./Restaruntdata";

export default function RestaurantPage() {
    const sampleData = [
  {
    id: 1,
    name: "Organic Arcadian Food",
    time: "12:01 am – 11:59 pm",
    rating: 4,
    location: "Link Road, Model Town",
    image: "https://images.unsplash.com/photo-1541698444083-023c97d3f4b6"
  },
  {
    id: 2,
    name: "Aromi Lounge",
    time: "12:00 pm – 12:00 am",
    rating: 5,
    location: "1784 Willow Creek Drive",
    image: "https://images.unsplash.com/photo-1555992336-03a23c8c6f36"
  },
  {
    id: 3,
    name: "Tasty Food Pizza",
    time: "12:02 am – 11:59 pm",
    rating: 4,
    location: "47 W 13th St, New York",
    image: "https://images.unsplash.com/photo-1548365328-7f3a8027f6d4"
  },
  {
    id: 4,
    name: "Food Chef Italian",
    time: "11:55 pm – 11:50 pm",
    rating: 5,
    location: "Abu Dhabi, UAE",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  }
]
  return (
    <div className="px-5 md:px-16 py-10">

      {/* HEADINGS */}
      <div className="text-center mb-10">
        <p className="text-green-700 font-medium">Top Restaurants</p>
        <h1 className="h1-serif text-3xl text-red-700 mt-1">Popular Restaurant</h1>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {sampleData.map((item) => (
          <RestaurantCard key={item.id} {...item} />
        ))}
      </div>

      {/* BANNER SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       
        <div className="relative rounded-3xl overflow-hidden h-64 shadow-lg">
              <img src={blu} alt="ertyu" className="w-full h-full object-cover" />
        

            </div>
             <div className="relative rounded-3xl overflow-hidden h-64 shadow-lg">
              <img src={blu} alt="ertyu" className="w-full h-full object-cover" />
        

            </div>
        
      </div>
       <div className="grid grid-cols-1 pt-5 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {sampleData.map((item) => (
          <RestaurantCard key={item.id} {...item} />
        ))}
      </div>

    </div>
  );
}