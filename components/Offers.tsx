export default function Offers() {
  const offers = [
    {
      title: "A4 Copy Paper",
      discount: "10% OFF",
    },
    {
      title: "Fast Charger",
      discount: "15% OFF",
    },
    {
      title: "School Bags",
      discount: "20% OFF",
    },
    {
      title: "Sticker Printing",
      discount: "Special Price",
    },
  ];

  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Today's Offers
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Limited Time Deals
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-blue-900">
                {offer.title}
              </h3>

              <p className="text-red-600 text-2xl font-bold mt-4">
                {offer.discount}
              </p>

              <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                Order Now
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}