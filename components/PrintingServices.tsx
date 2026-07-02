export default function PrintingServices() {
  const services = [
    { icon: "🖨️", name: "Black & White Printing" },
    { icon: "🌈", name: "Color Printing" },
    { icon: "📄", name: "Photocopy" },
    { icon: "📑", name: "Lamination" },
    { icon: "📚", name: "Spiral Binding" },
    { icon: "🆔", name: "ID Card Printing" },
    { icon: "📷", name: "Passport Size Photos" },
    { icon: "🎨", name: "Graphic Designing" },
    { icon: "🏷️", name: "Flex Printing" },
    { icon: "📘", name: "Thesis Binding" },
    { icon: "📜", name: "Certificate Prints" },
    { icon: "💳", name: "PVC Card" },
    { icon: "🏷️", name: "Sticker Printing" },
  ];

  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Printing Services
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Professional Printing & Designing Solutions
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 text-center"
            >
              <div className="text-6xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-blue-900">
                {service.name}
              </h3>

              <a
                href={`https://wa.me/923407488658?text=${encodeURIComponent(
                  `Assalam-o-Alaikum,

I need this service:

${service.name}

Please share the price and details.

Thanks.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-5 bg-blue-900 hover:bg-blue-700 text-white py-3 rounded-lg font-bold text-center transition"
              >
                Get Service
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}