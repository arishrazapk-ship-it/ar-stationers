export default function Stats() {
  const stats = [
    {
      icon: "😊",
      number: "5000+",
      title: "Happy Customers",
    },
    {
      icon: "🖨️",
      number: "50,000+",
      title: "Printing Jobs",
    },
    {
      icon: "🏆",
      number: "10+",
      title: "Years Experience",
    },
    {
      icon: "📦",
      number: "1000+",
      title: "Products",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold">
                {item.number}
              </h2>

              <p className="mt-3 text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}