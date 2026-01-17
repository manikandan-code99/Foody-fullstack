import React from "react";

/**
 * Tabs.jsx
 * props:
 * - active: string
 * - onChange(tab)
 * - tabs: array [{key,label}]
 */
export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="max-w-5xl mx-auto px-4 mt-6">
      <div className="bg-white border border-gray-200 rounded-md p-0">
        <div className="flex overflow-x-auto no-scrollbar">
          {tabs.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                onClick={() => onChange(t.key)}
                className={`px-4 py-3 text-sm ${isActive ? "border-b-2 border-teal-600 text-gray-900" : "text-gray-600"}`}
                style={{ minWidth: 140 }}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
