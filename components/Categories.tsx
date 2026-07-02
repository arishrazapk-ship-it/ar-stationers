export default function Categories() {
  const categories = [
    {
      icon: "📚",
      title: "Stationery",
      desc: "School & Office Supplies",
    },
    {
      icon: "🖨️",
      title: "Printing",
      desc: "Color & Black Printing",
    },
    {
      icon: "📱",
      title: "Mobile Accessories",
      desc: "Chargers, Covers & Earphones",
    },
    {
      icon: "💻",
      title: "Computer Accessories",
      desc: "Mouse, Keyboard & More",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Shop by Category
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Everything you need in one place
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <div className="text-6xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-900">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.desc}
              </p>

              <button className="mt-6 bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                View Products
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}