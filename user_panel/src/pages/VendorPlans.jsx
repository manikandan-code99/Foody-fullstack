export default function Plans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">

      {/* BASIC PLAN */}
      <div className="border-2 border-yellow-500 rounded-xl p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6">Basic Plan</h2>

          <div className="bg-yellow-400 text-black text-center py-4 text-3xl font-bold rounded-md">
            £15.00
          </div>

          <p className="mt-4 font-semibold text-gray-700 text-center">
            One Time Payment
          </p>

          <p className="mt-4 text-gray-600 text-center leading-relaxed">
            There are many variations of passages of Lorem Ipsum but the majority
            have suffered alteration in some form, by injected humour, or randomised
            words which don't look even slightly believable.
          </p>
        </div>

        <div className="mt-10">
          <div className="text-center py-4 border-t border-gray-200">
            <p className="text-gray-700 font-semibold">Promote Product</p>
            <p className="font-bold">200</p>
          </div>

          <button className="w-full mt-4 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition">
            GET STARTED
          </button>
        </div>
      </div>

      {/* STANDARD */}
      <div className="border-2 border-yellow-500 rounded-xl p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6">Standard</h2>

          <div className="bg-black text-white text-center py-4 text-3xl font-bold rounded-md">
            £30.00
          </div>

          <p className="mt-4 font-semibold text-gray-700 text-center">
            One Time Payment
          </p>

          <p className="mt-4 text-gray-600 text-center leading-relaxed">
            There are many variations of passages of Lorem Ipsum but the majority
            have suffered alteration in some form, by injected humour, or randomised
            words which don't look even slightly believable.
          </p>
        </div>

        <div className="mt-10">
          <div className="text-center py-4 border-t border-gray-200">
            <p className="text-gray-700 font-semibold">Promote Product</p>
            <p className="font-bold">400</p>
          </div>

          <button className="w-full mt-4 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition">
            GET STARTED
          </button>
        </div>
      </div>

      {/* PREMIUM */}
      <div className="border-2 border-yellow-500 rounded-xl p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6">Premium</h2>

          <div className="bg-yellow-400 text-black text-center py-4 text-3xl font-bold rounded-md">
            £45.00
          </div>

          <p className="mt-4 font-semibold text-gray-700 text-center">
            One Time Payment
          </p>

          <p className="mt-4 text-gray-600 text-center leading-relaxed">
            There are many variations of passages of Lorem Ipsum but the majority
            have suffered alteration in some form, by injected humour, or randomised
            words which don't look even slightly believable.
          </p>
        </div>

        <div className="mt-10">
          <div className="text-center py-4 border-t border-gray-200">
            <p className="text-gray-700 font-semibold">Promote Product</p>
            <p className="font-bold">600</p>
          </div>

          <button className="w-full mt-4 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition">
            GET STARTED
          </button>
        </div>
      </div>

    </div>
  );
}
