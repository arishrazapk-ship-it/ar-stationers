"use client";

type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

type Props = {
  product: Product | null;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: Props) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">

        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover"
          />
        ) : (
          <div className="h-72 flex items-center justify-center text-7xl">
            📦
          </div>
        )}

        <div className="p-6">

          <h2 className="text-3xl font-bold text-blue-900">
            {product.name}
          </h2>

          <p className="text-yellow-500 mt-2 text-xl">
            ⭐⭐⭐⭐⭐
          </p>

          <p className="text-green-600 text-3xl font-bold mt-3">
            Rs. {product.price}
          </p>

          <p className="text-gray-600 mt-4">
            High quality product from AR Stationers.
            Contact us on WhatsApp for complete details and availability.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href={`https://wa.me/923407488658?text=Assalam-o-Alaikum, I want to order ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-center font-bold"
            >
              Order on WhatsApp
            </a>

            <button
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 text-white px-6 rounded-xl font-bold"
            >
              Close
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}