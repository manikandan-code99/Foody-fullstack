import { FaSearch, FaPizzaSlice } from "react-icons/fa";
import deliveryy from "../assets/delivery.png"; // use transparent PNG image
import { Link } from "react-router-dom";

export default function DeliveryLanding() {
  return (
    <div className="w-auto h-[600px] bg-white flex items-center justify-between px-20">

      {/* LEFT TEXT SECTION */}
      <div className="w-full h-fit">
        {/* Subheading */}
        <p className="text-green-700 font-semibold text-xl mb-4">
          Dine In Or Take Away
        </p>

        {/* Main Heading EXACT like your image */}
        <h1
          className="text-[30px] font-bold leading-tight mb-4"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Get Your Order 24/7 Right
          <br /> At Your Doorsteps
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-lg mb-8 max-w-lg">
          Plant-based diets may offer an advantage over those that are not
          plant-based with respect to prevention and management of diabetes…
        </p>

        {/* Buttons */}
        <div className="flex space-x-6">
          <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md shadow-lg tracking-wide">
            <Link to={'/All_vendors'}><FaSearch className="mr-2 text-lg" /> SEARCH NOW</Link>
          </button>

          <button className="flex items-center bg-neutral-900 hover:bg-black text-white font-bold py-3 px-8 rounded-md shadow-lg tracking-wide">
            <Link to={'/All_vendors'}><FaPizzaSlice className="mr-2 text-lg" /> ORDER FOOD</Link>
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="relative  flex items-center justify-center">
        <img
          src={deliveryy}
          alt="Delivery"
          className="w-450 object-contain drop-shadow-xl"
        />
      </div>

    </div>
  );
}