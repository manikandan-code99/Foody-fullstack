// src/components/AuthPage.js
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

export default function AuthPage() {

 const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="w-full min-h-screen bg-white">
            {/* ====== TOP BANNER ====== */}
            <div className="w-full">
                <div className="relative">
                    {/* Banner image */}
                    <img
                        src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80"
                        alt="food banner"
                        className="w-full h-[260px] object-cover"
                    />

                    {/* Floating center box */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
                        <div className="bg-white border rounded-lg shadow-md px-8 py-4 text-center">
                            <h1 className="text-xl md:text-2xl font-semibold tracking-wide text-black">
                                Sing-In / Sing-Up
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* ====== MAIN CONTENT ====== */}
            <main className="max-w-6xl mx-auto mt-12 px-6 md:px-8 pb-20">
                {/* spacing to clear overlapping box */}
                <div className="pt-10"></div>

                {/* Grid: Login | Register */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* ---------------- LEFT: LOGIN ---------------- */}
                    <section>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                            Login
                        </h2>

                        <div className="bg-white border rounded-xl shadow-md p-6">
                            {/* Username / Email */}
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Username Or Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your username or email"
                                className="w-full h-12 bg-gray-100 rounded-md px-4 mb-6 focus:outline-none"
                                aria-label="username or email"
                            />

                            {/* Password */}
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password <span className="text-red-500">*</span>
                            </label>

                            <div className="relative mb-4">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="w-full h-12 bg-gray-100 rounded-md px-4 focus:outline-none"
                                    aria-label="password"
                                />

                                {/* Toggle eye icon */}
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            {/* Remember + Button */}
                            <div className="flex items-center justify-between mb-4">
                                <label className="flex items-center text-sm gap-2">
                                    <input type="checkbox" className="h-4 w-4" />
                                    <span className="text-sm text-gray-700">Remember Me</span>
                                </label>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold h-12 rounded-md transition"
                            >
                                Log in
                            </button>

                            <div className="mt-4">
                                <a href="#" className="text-sm text-gray-700 hover:text-yellow-500">
                                    Lost Your Password?
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* ---------------- RIGHT: REGISTER ---------------- */}
                    <section>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                            Register
                        </h2>

                        <div className="bg-white border rounded-xl shadow-md p-6">
                            {/* Email */}
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full h-12 bg-gray-100 rounded-md px-4 mb-4 focus:outline-none"
                                aria-label="email address"
                            />

                            {/* Info paragraphs */}
                            <p className="text-sm text-gray-600 mb-4">
                                A link to set a new password will be sent to your email address.
                            </p>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Your personal data will be used to support your experience throughout this
                                website, to manage access to your account, and for other purposes described
                                in our privacy policy.
                            </p>

                            <button
                                type="button"
                                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold h-12 rounded-md mb-4 transition"
                            >
                                Register
                            </button>

                            <button
                                type="button"
                                className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-semibold h-12 rounded-md transition"
                            >
                                Become A Vendor
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}