export default function Reviews() {
  const reviews = [
    {
      name: "Ali Khan",
      review:
        "Excellent printing quality and very cooperative staff. Highly recommended!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Sara Ahmed",
      review:
        "Best stationery shop in G-10. Prices are reasonable and service is fast.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Usman",
      review:
        "Very professional. I always get my printing and photocopy work done here.",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Customer Reviews
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          What our customers say about us
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <p className="text-yellow-500 text-xl">
                {review.rating}
              </p>

              <p className="text-gray-700 mt-4 italic">
                "{review.review}"
              </p>

              <h3 className="mt-6 text-blue-900 font-bold">
                {review.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}