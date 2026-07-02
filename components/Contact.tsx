<section id="contact" className="bg-gray-100 py-20"></section>
export default function Contact() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Feel free to contact us anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-xl shadow-lg">

            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              AR Stationers
            </h3>

            <p className="mb-4">📍 G-10 Markaz, Islamabad</p>

            <p className="mb-4">📞 0340-7488658</p>

            <p className="mb-4">📧 arstationers@gmail.com</p>

            <p className="mb-6">🕒 Mon - Sat | 9:00 AM - 9:00 PM</p>

            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold">
              Chat on WhatsApp
            </button>

          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">

            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Send Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3 mb-4"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3 mb-4"
            />

            <textarea
              placeholder="Your Message"
              className="w-full border rounded-lg p-3 h-40 mb-4"
            ></textarea>

            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-bold">
              Send Message
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}