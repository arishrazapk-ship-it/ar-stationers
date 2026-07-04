"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useCart } from "../app/context/CartContext";

export default function Header() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="bg-[#173A8F] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="AR Stationers"
            className="w-20 h-20 object-contain"
          />

          <div>
            <h1 className="text-3xl font-bold text-yellow-400">
              AR Stationers
            </h1>

            <p className="text-sm text-gray-200">
              Printing • Photocopy • Stationery
            </p>
          </div>
        </div>

       {/* Navigation */}
<nav className="flex flex-wrap justify-center gap-8 text-lg font-semibold">

  <a href="#" className="hover:text-yellow-300 transition">
    Home
  </a>

  <a href="#products" className="hover:text-yellow-300 transition">
    Products
  </a>
<a href="/shop" className="hover:text-yellow-300 transition">
  Shop
</a>

  <a href="#stationery" className="hover:text-yellow-300 transition">
    Stationery
  </a>

  <a href="#mobile" className="hover:text-yellow-300 transition">
    Mobile
  </a>

  <a href="#services" className="hover:text-yellow-300 transition">
    Services
  </a>

  <a href="#about" className="hover:text-yellow-300 transition">
    About
  </a>

  <a href="#contact" className="hover:text-yellow-300 transition">
    Contact
  </a>

</nav>

      {/* Right Side */}
<div className="flex items-center gap-3 w-full lg:w-auto">
  <SearchBar />

  
  <Link href="/cart">
  <div className="relative cursor-pointer text-3xl hover:scale-110 transition">
    🛒

    {totalItems > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
        {totalItems}
      </span>
    )}
  </div>
</Link>

  <a
    href="https://wa.me/923407488658?text=Assalam-o-Alaikum, I want to know about your products."
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-lg font-bold whitespace-nowrap transition"
  >
    WhatsApp
  </a>
</div>
      </div>
    </header>
  );
}