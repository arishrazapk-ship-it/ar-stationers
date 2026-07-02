export default function PremiumFooter() {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">
              AR Stationers
            </h2>

            <p className="mt-4 text-gray-300 leading-7">
              Your trusted partner for Printing, Photocopy,
              Stationery, Mobile Accessories and Computer
              Accessories in Islamabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li><a href="#">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Contact
            </h3>

            <p className="mb-3">
              📞 0340-7488658
            </p>

            <p className="mb-3">
              📍 Shop #8, Ground Floor,
              Aklasic Plaza,
              G-10 Markaz,
              Islamabad
            </p>

            <p>
              📧 info@arstationers.com
            </p>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Business Hours
            </h3>

            <p className="mb-3">
              Monday - Saturday
            </p>

            <p className="mb-3">
              9:00 AM - 9:00 PM
            </p>

            <a
              href="https://wa.me/923407488658"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-bold"
            >
              💬 WhatsApp Us
            </a>
          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        <div className="text-center text-gray-400">
          © 2026 AR Stationers. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}