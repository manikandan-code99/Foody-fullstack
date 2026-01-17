import { useState, useEffect } from "react";

export default function AddFoodModal({
  isOpen,
  onClose,
  onSave,
  editFood
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (editFood) {
      setName(editFood.name);
      setPrice(editFood.price);
      setImageUrl(editFood.imageUrl || "");
    } else {
      setName("");
      setPrice("");
      setImageUrl("");
    }
  }, [editFood]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!name || !price) return;

    onSave({
      id: editFood ? editFood.id : Date.now(),
      name,
      price,
      imageUrl
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">
          {editFood ? "Edit Food" : "Add New Food"}
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Food name"
          className="border p-2 rounded w-full mb-3"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          type="number"
          className="border p-2 rounded w-full mb-3"
        />

        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          className="border p-2 rounded w-full mb-3"
        />

        {/* Image Preview */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="preview"
            className="w-full h-40 object-cover rounded mb-4"
          />
        )}

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
