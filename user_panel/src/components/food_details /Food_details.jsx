
import React, { useState } from "react";
import ProductHeader from "./Head";
import Tabs from "./Tabs";
import RelatedProducts from "./Related_food";

/* Dummy data */
const PRODUCT = {
  id: 1,
  title: "Spaghetti Bolognese",
  price: "£150.00",
  oldPrice: "£200.00",
  description:
    "Spaghetti Bolognese is a classic Italian pasta dish featuring spaghetti served with a hearty, slow-cooked meat sauce made from ground beef, tomatoes, onions, and herbs. Rich and comforting.",
  mainImage: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80",
  categories: ["Appetizers", "Breakfast", "Calzone"],
  related: [
    { id: 11, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80", category: "Appetizers", title: "Chicken Spring Roll", price: "£780.00", oldPrice: null, sale: false },
    { id: 12, img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80", category: "Appetizers", title: "alfredo pasta", price: "£100.00", oldPrice: "£150.00", sale: true },
    { id: 13, img: "https://images.unsplash.com/photo-1604908177522-94b9c0b5f6f5?auto=format&fit=crop&w=800&q=80", category: "Appetizers", title: "Fish & Chips", price: "£1,095.00", oldPrice: null, sale: false },
    { id: 14, img: "https://images.unsplash.com/photo-1551022379-8b1f8ced9f55?auto=format&fit=crop&w=800&q=80", category: "Appetizers", title: "Raisin Sandwiches", price: "£350.00", oldPrice: null, sale: false },
  ],
};

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { key: "description", label: "Description" },
    { key: "reviews", label: "Reviews (0)" },
    { key: "offers", label: "More Offers" },
    { key: "policies", label: "Store Policies" },
    { key: "inquiries", label: "Inquiries" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* header */}
      <ProductHeader
        title={PRODUCT.title}
        price={PRODUCT.price}
        oldPrice={PRODUCT.oldPrice}
        description={PRODUCT.description}
        mainImage={PRODUCT.mainImage}
        isClosed={true}
        categories={PRODUCT.categories}
      />

      {/* tabs */}
      <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />

      {/* content container */}
      <div className="max-w-5xl mx-auto px-4 mt-6">
        <div className="bg-white border border-gray-200 rounded-md p-6">
          {/* content - switch by activeTab */}
          {activeTab === "description" && (
            <>
              <h3 className="text-lg font-semibold mb-4">Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {PRODUCT.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non lorem vel velit interdum cursus. Nulla facilisi. Sed vitae massa a arcu aliquet commodo.
              </p>

              {/* Related Products */}
              <div className="mt-8">
                <RelatedProducts items={PRODUCT.related} />
              </div>
            </>
          )}

          {activeTab === "reviews" && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Reviews (0)</h3>
              <p className="text-sm text-gray-600">No reviews yet.</p>
            </div>
          )}

          {activeTab === "offers" && (
            <div>
              <h3 className="text-lg font-semibold mb-4">More Offers</h3>
              <p className="text-sm text-gray-600">Offer details go here.</p>
            </div>
          )}

          {activeTab === "policies" && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Store Policies</h3>
              <p className="text-sm text-gray-600">Policy text goes here.</p>
            </div>
          )}

          {activeTab === "inquiries" && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Inquiries</h3>
              <p className="text-sm text-gray-600">Contact form or info here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
