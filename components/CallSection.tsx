export default function CallSection() {
  return (
    <section className="bg-blue-900 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-white mb-4">
          Need Any Help?
        </h2>

        <p className="text-white text-lg mb-10">
          Contact AR Stationers for Printing, Photocopy,
          Stationery, Computer Accessories & Mobile Accessories.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">

          <a
            href="tel:+923407488658"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/923407488658"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg"
          >
            💬 WhatsApp Now
          </a>

        </div>

      </div>
    </section>
  );
}