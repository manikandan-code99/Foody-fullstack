import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VendorConfirmation = () => {
   const [openModal, setOpenModal] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeHealth, setAgreeHealth] = useState(false);
const navigate = useNavigate();
  const handleProceed = () => {
  
    if (agreeTerms && agreeHealth) {
      navigate("/vendorM/thankyou"); 

    } else {
      alert("Please agree to all conditions before continuing.");
    }
  };

  return (
    <div >
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
        
        {/* TITLE */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Confirm Your Restaurant Registration
        </h1>
        <p className="text-gray-600">
          Before completing your registration, please review and agree to the following terms to ensure your restaurant meets our platform standards.
        </p>

        {/* CONDITIONS PREVIEW BOX */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 my-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Conditions Overview
          </h2>

          <ul className="text-gray-600">
            <li className="mb-2">• Restaurant must follow all food safety regulations.</li>
            <li className="mb-2">• Only approved menu items can be listed.</li>
            <li className="mb-2">• Packaging and delivery standards must be maintained.</li>
            <li className="mb-2">• Accurate business details must be provided.</li>
            <li>• Restaurant owner is responsible for hygiene & staff cleanliness.</li>
          </ul>
        </div>

        {/* BUTTONS */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-medium"
          >
            Back
          </button>

          <button
            onClick={() => setOpenModal(true)}
            className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg"
          >
            Review & Confirm
          </button>
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white max-w-lg w-full rounded-xl p-8 shadow-xl">
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Please Confirm the Following
            </h2>

            {/* TERMS CHECKBOX */}
            <label className="flex items-start gap-3 mb-4 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
              />
              <span className="text-gray-700 leading-relaxed">
                I agree to the <strong>Restaurant Terms & Conditions</strong> including legal compliance, refund policies, and onboarding rules.
              </span>
            </label>

            {/* HEALTH CHECK CHECKBOX */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1"
                checked={agreeHealth}
                onChange={() => setAgreeHealth(!agreeHealth)}
              />
              <span className="text-gray-700 leading-relaxed">
                I confirm my restaurant follows all <strong>Food Safety & Hygiene Standards</strong> (FSSAI norms, clean kitchen, fresh ingredients, safe packaging).
              </span>
            </label>

            {/* ACTION BUTTONS */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setOpenModal(false)}
                className="px-5 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700"
              >
                Cancel
              </button>

              <button
                onClick={handleProceed}
                className="px-7 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg"
              >
                Confirm & Proceed
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default VendorConfirmation
