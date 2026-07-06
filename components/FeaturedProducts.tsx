"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getProducts } from "../app/services/productService";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();

      // صرف پہلے 4 Products دکھائیں
      setProducts(
  data
    .filter((item: any) => item.image && item.image.trim() !== "")
    .slice(0, 4)
);
    }

    loadProducts();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          ⭐ Featured Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item: any) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              {item.image ? (
  <img
    src={item.image}
    alt={item.name}
    className="w-full h-56 object-cover"
  />
) : (
  <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500">
    No Image
  </div>
)}

              <div className="p-5">
                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-green-600 font-bold mt-2">
                  Rs. {item.price}
                </p>

                <Link
                  href={`/product/${item.id}`}
                  className="block mt-5 bg-blue-700 hover:bg-blue-800 text-white text-center py-3 rounded-lg"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>

<div className="text-center mt-12">
  <Link
    href="/shop"
    className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold transition"
  >
    View All Products →
  </Link>
</div>

      </div>
    </section>
  );
}