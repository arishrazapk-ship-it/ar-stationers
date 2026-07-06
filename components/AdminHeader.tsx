"use client";

import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../app/context/lib/firebase";

export default function AdminHeader() {
  async function handleLogout() {
    await signOut(auth);
    window.location.href = "/login";
  }

  return (
    <header className="bg-white shadow rounded-xl p-5 mb-8 flex items-center justify-between">

      <div>
        <h1 className="text-2xl font-bold text-blue-700">
          AR Stationers Admin
        </h1>

        <p className="text-gray-500 text-sm">
          Manage Products & Orders
        </p>
      </div>

      <div className="flex items-center gap-4">

        <Link
          href="/"
          className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
        >
          🌐 Website
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </header>
  );
}