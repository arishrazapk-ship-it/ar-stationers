export default function Footer() {
  return (
    <footer className="bg-[#173A8F] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">
              AR Stationers
            </h2>

            <p className="mt-4 text-gray-300">
              Your trusted destination for Printing,
              Photocopy, Stationery &
              Computer Accessories.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Contact
            </h3>

            <p>📍 G-10 Markaz, Islamabad</p>

            <p className="mt-2">📞 0340-7488658</p>

            <p className="mt-2">
              ✉️ arstationers@gmail.com
            </p>
          </div>

          {/* Timing */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Opening Hours
            </h3>

            <p>Monday - Saturday</p>

            <p>09:00 AM - 09:00 PM</p>

            <button className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-bold">
              WhatsApp Us
            </button>
          </div>

        </div>

        <hr className="my-8 border-white/20" />

        <p className="text-center text-gray-300">
          © 2026 AR Stationers. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}