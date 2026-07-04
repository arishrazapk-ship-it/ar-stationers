import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "./context/CartContext";
export const metadata: Metadata = {
  title: {
    default: "AR Stationers",
    template: "%s | AR Stationers",
  },

  description:
    "AR Stationers provides Printing, Photocopy, Stationery, School Bags, Office Supplies, Mobile Accessories and Computer Accessories in G-10 Markaz Islamabad.",

  keywords: [
    "AR Stationers",
    "Stationery Islamabad",
    "Printing Islamabad",
    "Photocopy Islamabad",
    "School Bags",
    "Office Supplies",
    "Mobile Accessories",
    "Computer Accessories",
    "Islamabad",
  ],

  authors: [{ name: "AR Stationers" }],

  verification: {
    google: "Pz7Pp0GKNNm5L1Rt_e4IYfS5C0sGX2kU056CrbBEwWs",
  },

  openGraph: {
    title: "AR Stationers",
    description:
      "Printing, Stationery & Office Supplies in Islamabad.",
    url: "https://ar-stationers.vercel.app",
    siteName: "AR Stationers",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-gray-100">
  <CartProvider>
    {children}
  </CartProvider>
</body>
    </html>
  );
}