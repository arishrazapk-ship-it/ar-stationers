import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Products from "../../components/Products";
import Stationery from "../../components/Stationery";
import MobileAccessories from "../../components/MobileAccessories";

export default function ShopPage() {
  return (
    <>
      <Header />

      <main className="bg-gray-100 min-h-screen">
        <div className="bg-[#173A8F] text-white text-center py-16">
          <h1 className="text-5xl font-bold">AR Stationers Shop</h1>

          <p className="mt-4 text-xl">
            Browse Our Complete Product Collection
          </p>
        </div>

        <Products />

        <Stationery />

        <MobileAccessories />
      </main>

      <Footer />
    </>
  );
}