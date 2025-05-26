// src/app/login/page.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-[#052c42] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex overflow-hidden">
        {/* Левая часть с изображением */}
        <div className="w-1/2 relative hidden lg:block">
          <img
              src="/login-banner.jpg"
              alt="Login Banner"
              className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Правая часть с формой */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="mb-4 px-4 py-3 border rounded w-full focus:outline-none focus:ring"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            className="mb-4 px-4 py-3 border rounded w-full focus:outline-none focus:ring"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-[#052c42] text-white py-3 rounded font-bold hover:bg-[#021d2b] transition">
            SIGN IN
          </button>

          <Link
            href="/register"
            className="w-full text-center mt-4 py-3 bg-gray-100 rounded font-semibold text-[#052c42] hover:bg-gray-200 transition block"
          >
            CREATE AN ACCOUNT
          </Link>
        </div>
      </div>
    </div>
  );
}



