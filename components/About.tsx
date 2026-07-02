<section id="about" className="bg-white py-20 px-6"></section>
export default function About() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <img
            src="/logo.png"
            alt="AR Stationers"
            className="w-80 mx-auto"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            About AR Stationers
          </h2>

          <p className="text-gray-600 text-lg leading-8">
            AR Stationers is your trusted destination for
            Printing, Photocopy, Stationery, Office Supplies,
            School Accessories and Computer Accessories.

            We provide high quality products at affordable prices
            with fast customer service in G-10 Markaz Islamabad.
          </p>

          <div className="mt-8 space-y-3 text-lg">

            <p>✅ High Quality Printing</p>

            <p>✅ Fast Photocopy Service</p>

            <p>✅ Graphic Designing</p>

            <p>✅ School & Office Stationery</p>

            <p>✅ Computer Accessories</p>

          </div>
        </div>

      </div>
    </section>
  );
}