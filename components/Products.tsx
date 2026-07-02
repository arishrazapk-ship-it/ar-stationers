"use client";

import { useState } from "react";
import ProductModal from "./ProductModal";
import { products } from "../data/products";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Featured School Bags
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Premium Quality School Bags
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <div
  key={product.id}
  onClick={() => setSelectedProduct(product)}
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">

                <h3 className="text-xl font-bold text-blue-900">
                  {product.name}
                </h3>

                <p className="text-yellow-500 mt-2">
                  ⭐⭐⭐⭐⭐
                </p>

                <p className="text-green-600 text-2xl font-bold mt-2">
                  Rs. {product.price}
                </p>

              <a
  href={`https://wa.me/923407488658?text=${encodeURIComponent(
    `Assalam-o-Alaikum,

I want to order:

${product.name}

Please share the price and availability.

Thanks.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full mt-5 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold text-center transition"
>
  Order on WhatsApp
</a>

              </div>
            </div>
          ))}

        </div>

      </div>
      <ProductModal
  product={selectedProduct}
  onClose={() => setSelectedProduct(null)}
/>
    </section>
  );
}