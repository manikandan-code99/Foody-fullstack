// import { useState } from "react";
// import { Plus } from "lucide-react";
// import AddFoodmodel from "../admin-pages/AddFoodmodel";

// export default function Products() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* PRODUCTS PAGE */}
//       <div className="bg-white p-6 rounded-xl shadow">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="font-semibold text-lg">Food Items</h2>

//           <button
//             onClick={() => setOpen(true)}
//             className="bg-green-600 text-white px-4 py-2 rounded flex gap-2 items-center"
//           >
//             <Plus size={18} />
//             Add Food
//           </button>
//         </div>

//         <p className="text-gray-500">No foods added yet</p>
//       </div>

//       {/* 👇 THIS MUST BE HERE */}
//       <AddFoodmodel
//         isOpen={open}
//         onClose={() => setOpen(false)}
//       />
//     </>
//   );
// }
import { useState } from "react";
import { Plus, Pencil, Trash } from "lucide-react";
import AddFoodmodel from "../admin-pages/AddFoodmodel";

export default function Products() {
  const [foods, setFoods] = useState([]);
  const [open, setOpen] = useState(false);
  const [editFood, setEditFood] = useState(null);

  const handleSaveFood = (food) => {
    if (editFood) {
      setFoods(foods.map(f => (f.id === food.id ? food : f)));
    } else {
      setFoods([...foods, food]);
    }
  };

  const handleDelete = (id) => {
    setFoods(foods.filter(f => f.id !== id));
  };

  const handleEdit = (food) => {
    setEditFood(food);
    setOpen(true);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold text-lg">Food Items</h2>

          <button
            onClick={() => {
              setEditFood(null);
              setOpen(true);
            }}
            className="bg-green-600 text-white px-4 py-2 rounded flex gap-2"
          >
            <Plus /> Add Food
          </button>
        </div>

        {foods.length === 0 ? (
          <p className="text-gray-500">No foods added yet</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Name</th>
                <th className="text-left">Price</th>
                <th className="text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
  {foods.map((food) => (
    <tr key={food.id} className="border-b">
      <td className="py-2 flex items-center gap-3">
        {food.imageUrl && (
          <img
            src={food.imageUrl}
            alt={food.name}
            className="w-12 h-12 rounded object-cover"
          />
        )}
        {food.name}
      </td>
      <td>₹{food.price}</td>
      <td className="flex gap-3 py-2 ">
        <button
          onClick={() => handleEdit(food)}
          className="text-blue-600"
        >
          <Pencil />
        </button>
        <button
          onClick={() => handleDelete(food.id)}
          className="text-red-600"
        >
          <Trash />
        </button>
      </td>
    </tr>
  ))}
</tbody>

            {/* <tbody>
              {foods.map((food) => (
                <tr key={food.id} className="border-b">
                  <td className="py-2">{food.name}</td>
                  <td>₹{food.price}</td>
                  <td className="flex gap-3 py-2">
                    <button
                      onClick={() => handleEdit(food)}
                      className="text-blue-600"
                    >
                      <Pencil />
                    </button>
                    <button
                      onClick={() => handleDelete(food.id)}
                      className="text-red-600"
                    >
                      <Trash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
        )}
      </div>

      <AddFoodmodel
        isOpen={open}
        onClose={() => setOpen(false)}
        onSave={handleSaveFood}
        editFood={editFood}
      />
    </>
  );
}
