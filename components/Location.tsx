export default function Location() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Visit Our Shop
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-10">
          We are always happy to serve you.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Shop Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              AR Stationers
            </h3>

            <p className="mb-4">
              📍 Address: Your Shop Address Here
            </p>

            <p className="mb-4">
              📞 Phone: 0340-7488658
            </p>

            <p className="mb-4">
              📧 Email: info@arstationers.com
            </p>

            <p>
              🕒 Mon - Sat: 9:00 AM - 9:00 PM
            </p>

          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">

            <iframe
              src="https://www.google.com/maps?q=Islamabad&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}