"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getProducts } from "../app/services/productService";

export default function MobileAccessories() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();

      const mobileProducts = data.filter(
        (item: any) =>
          item.category.toLowerCase() === "mobile accessories"
      );

      setProducts(mobileProducts);
    }

    loadProducts();
  }, []);

  return (
    <section id="mobile" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Mobile Accessories
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Original Mobile Accessories
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {products.map((item: any) => (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden block"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-7xl">📱</span>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-blue-900">
                  {item.name}
                </h3>

                <p className="text-yellow-500 mt-2">
                  ⭐⭐⭐⭐⭐
                </p>

                <p className="text-green-600 text-2xl font-bold mt-2">
                  Rs. {item.price}
                </p>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      `https://wa.me/923407488658?text=${encodeURIComponent(
                        `Assalam-o-Alaikum,

I want to order:

${item.name}

Please share the price and availability.

Thanks.`
                      )}`,
                      "_blank"
                    );
                  }}
                  className="block w-full mt-5 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold text-center transition"
                >
                  Order on WhatsApp
                </button>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}