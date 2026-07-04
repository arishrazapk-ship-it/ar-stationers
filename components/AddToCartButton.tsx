"use client";

import { useCart } from "../app/context/CartContext";

interface Props {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({
          ...product,
          quantity: 1,
        })
      }
      className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold"
    >
      🛒 Add to Cart
    </button>
  );
}