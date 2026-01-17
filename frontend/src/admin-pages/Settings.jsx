import { useState } from "react";

export default function Settings() {
  const [restaurantName, setRestaurantName] = useState("Tasty Bites");
  const [ownerName, setOwnerName] = useState("John Doe");
  const [email, setEmail] = useState("owner@tastybites.com");
  const [phone, setPhone] = useState("9876543210");

  const handleSave = () => {
    alert("Settings saved! (In real app, send to backend)");
  };

  return (
    <div className="p-6 bg-gray-50 rounded-xl min-h-screen space-y-6">
      <h2 className="font-bold text-xl">Restaurant Settings</h2>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <div>
          <label className="block font-semibold mb-1">Restaurant Name</label>
          <input
            type="text"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Owner Name</label>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded mt-2"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}
