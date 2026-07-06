"use client";

import Link from "next/link";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">

      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-xl text-center">

        <div className="text-7xl mb-6">
          ✅
        </div>

        <h1 className="text-4xl font-bold text-green-700">
          Order Placed Successfully
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Thank you for shopping with
          <span className="font-bold text-blue-700">
            {" "}AR Stationers
          </span>
          .
        </p>

        <p className="mt-3 text-gray-500">
          We have received your order.
          Our team will contact you shortly.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}