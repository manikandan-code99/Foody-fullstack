import React from 'react'

const VendorThankYou = () => {

  return (
    <div >
      <div className="w-full max-w-md bg-white border border-gray-200 shadow-md px-8 py-10 text-center">
        {/* Icon - Spotify style */}
        <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-[#1DB954] flex items-center justify-center">
          <svg
            className="h-10 w-10 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              d="M5 13.5L9.5 18L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          Thank you for Registration
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-6">
          Your account has been created. Please check your email to verify and
          then continue to your dashboard.
        </p>

        {/* Info box */}
        <div className="bg-yellow-50 border border-yellow-200 text-xs text-gray-700 px-4 py-3 mb-6 text-left">
          <p className="font-semibold text-yellow-700 mb-1">
            What happens next?
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Verify your email address using the link we sent.</li>
            <li>Complete your store profile and add your first products.</li>
            <li>Start receiving food orders from customers.</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold py-2"
          >
            Go to Dashboard
          </button>
          <button
            type="button"
            className="flex-1 border border-gray-300 text-sm font-semibold py-2 text-gray-700 hover:bg-gray-50"
          >
            Back to Home
          </button>
        </div>

        {/* Small note */}
        <p className="mt-6 text-[11px] text-gray-400">
          Didn&apos;t receive the email? Check your spam folder or try again
          later.
        </p>
      </div>
    </div>
  );
};

export default VendorThankYou
