import FeaturedProducts from "../components/FeaturedProducts";
import PremiumFooter from "../components/PremiumFooter";
import Stats from "../components/Stats";
import CallSection from "../components/CallSection";
import Reviews from "../components/Reviews";
import Location from "../components/Location";
import BackToTop from "../components/BackToTop";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import PrintingServices from "../components/PrintingServices";
import MobileAccessories from "../components/MobileAccessories";
import Stationery from "../components/Stationery";
import Offers from "../components/Offers";
import WhatsAppButton from "../components/WhatsAppButton";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main
        style={{
          background: "#f4f7fc",
          minHeight: "100vh",
        }}
      >
        <Hero />
<Stats />
        <Categories />
<Offers />
        <Products />
        <FeaturedProducts />
<Stationery />
<MobileAccessories />
<PrintingServices />
        <Services />

        <About />

        <section
          style={{
            background: "#ffffff",
            padding: "80px 20px",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
                color: "#173A8F",
                marginBottom: "25px",
              }}
            >
              Why Choose AR Stationers?
            </h2>

            <p
              style={{
                fontSize: "20px",
                color: "#555",
                lineHeight: "1.8",
              }}
            >
              We provide premium quality Printing, Photocopy,
              Graphic Designing, Office Supplies, School
              Stationery and Computer Accessories at affordable
              prices. Our mission is to deliver fast service,
              excellent quality and complete customer
              satisfaction.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "25px",
                flexWrap: "wrap",
                marginTop: "50px",
              }}
            >
              <div
                style={{
                  background: "#173A8F",
                  color: "#fff",
                  padding: "25px",
                  borderRadius: "12px",
                  width: "220px",
                }}
              >
                ⚡ Fast Service
              </div>

              <div
                style={{
                  background: "#173A8F",
                  color: "#fff",
                  padding: "25px",
                  borderRadius: "12px",
                  width: "220px",
                }}
              >
                🏆 Best Quality
              </div>

              <div
                style={{
                  background: "#173A8F",
                  color: "#fff",
                  padding: "25px",
                  borderRadius: "12px",
                  width: "220px",
                }}
              >
                💰 Affordable Prices
              </div>

              <div
                style={{
                  background: "#173A8F",
                  color: "#fff",
                  padding: "25px",
                  borderRadius: "12px",
                  width: "220px",
                }}
              >
                😊 Customer Support
              </div>
            </div>
          </div>
        </section>

        <Contact />

       <Location />
       <Reviews />
       <CallSection />
        <PremiumFooter />
        <FloatingWhatsApp />
        <BackToTop />
      <WhatsAppButton />
      </main>
    </>
  );
}