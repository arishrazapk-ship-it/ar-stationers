"use client";
import Link from "next/link";

import { useCart } from "../context/CartContext";

export default function CartPage() {
const {
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        🛒 Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-xl">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 border rounded-xl p-4 shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-green-600 font-bold">
                    Rs. {item.price}
                  </p>

                <div className="flex items-center gap-3 mt-3">
  <button
    onClick={() => decreaseQuantity(item.id)}
    className="bg-red-500 text-white px-3 py-1 rounded"
  >
    -
  </button>

  <span className="font-bold text-lg">
    {item.quantity}
  </span>

  <button
    onClick={() => increaseQuantity(item.id)}
    className="bg-green-500 text-white px-3 py-1 rounded"
  >
    +
  </button>

  <button
    onClick={() => removeFromCart(item.id)}
    className="ml-4 bg-gray-800 text-white px-4 py-1 rounded"
  >
    Remove
  </button>
</div>
                </div>
              </div>
            ))}
          </div>

         <div className="mt-10 flex justify-between items-center">

  <h2 className="text-3xl font-bold">
    Total: Rs. {total}
  </h2>

  <Link
    href="/checkout"
    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold"
  >
    Proceed to Checkout
  </Link>

</div>
         
        </>
      )}
    </div>
  );
}