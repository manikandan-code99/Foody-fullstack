import React from 'react'
import { useNavigate } from 'react-router-dom'

const Leftside = () => {
    const navigate = useNavigate()
  return (
     <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h4 className="text-sm font-semibold mb-3">All Details</h4>
        <ul className="space-y-3 text-gray-700">
          <li>
            <button onClick={() => navigate("/reshome")} className="flex items-center gap-3 w-full text-left hover:text-yellow-500">
              <span className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">🍽</span>
              Menu
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/review")} className="flex items-center gap-3 w-full text-left hover:text-yellow-500">
              <span className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">✍️</span>
              Reviews
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/info")} className="flex items-center gap-3 w-full text-left hover:text-yellow-500">
              <span className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">ℹ️</span>
              Restaurant Info
            </button>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h4 className="text-sm font-semibold mb-3">Advertisement</h4>
        <img src="https://images.unsplash.com/photo-1606755962776-1d8f01f900f8?auto=format&fit=crop&w=400&q=80" alt="ad" className="w-full rounded-md" />
      </div>
    </div>
  )
}

export default Leftside
