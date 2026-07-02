"use client";

import { useState } from "react";
import { searchProducts } from "../data/searchProducts";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const filtered = searchProducts.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full lg:w-64">
      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-3 rounded-lg text-black outline-none"
      />

      {search && (
        <div className="absolute mt-1 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">
              No product found
            </div>
          )}
        </div>
      )}
    </div>
  );
}