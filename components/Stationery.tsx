import { stationery } from "../data/stationery";

export default function Stationery() {
  return (
    <section id="stationery" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Stationery Collection
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Premium School & Office Stationery
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {stationery.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              {/* Product Icon */}
              <div className="flex justify-center items-center h-48 bg-gray-100 text-7xl">
                📚
              </div>

              {/* Product Details */}
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

                <a
                  href={`https://wa.me/923407488658?text=${encodeURIComponent(
                    `Assalam-o-Alaikum,

I want to order:

${item.name}

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
    </section>
  );
}