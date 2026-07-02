export default function MobileAccessories() {
  const mobiles = [
    { icon: "🔌", name: "Charger", price: "Rs. 1200" },
    { icon: "⚡", name: "Fast Charger", price: "Rs. 1800" },
    { icon: "🔗", name: "Type-C Cable", price: "Rs. 600" },
    { icon: "🍎", name: "iPhone Cable", price: "Rs. 1200" },
    { icon: "🎧", name: "Earphones", price: "Rs. 900" },
    { icon: "🎵", name: "Bluetooth Earbuds", price: "Rs. 3500" },
    { icon: "🔋", name: "Power Bank", price: "Rs. 4500" },
    { icon: "💾", name: "Memory Card", price: "Rs. 1500" },
    { icon: "💽", name: "USB Flash Drive", price: "Rs. 1800" },
    { icon: "🎧", name: "Headphones", price: "Rs. 2800" },
  ];

  return (
    <section id="mobile" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Mobile Accessories
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Original Mobile Accessories
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {mobiles.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 text-center"
            >
              <div className="text-6xl mb-4">
                {item.icon}
              </div>

              <h3 className="font-bold text-lg text-blue-900">
                {item.name}
              </h3>

              <p className="text-green-600 font-bold text-xl mt-2">
                {item.price}
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
          ))}

        </div>

      </div>
    </section>
  );
}