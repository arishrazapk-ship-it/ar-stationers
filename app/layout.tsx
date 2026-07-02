import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "AR Stationers",
    template: "%s | AR Stationers",
  },

  description:
    "AR Stationers - Printing, Photocopy, Stationery, School Bags, Mobile Accessories, Computer Accessories and Office Supplies in G-10 Markaz Islamabad.",

  keywords: [
    "AR Stationers",
    "Stationery Islamabad",
    "Printing Islamabad",
    "Photocopy Islamabad",
    "School Bags",
    "Office Supplies",
    "Mobile Accessories",
    "Computer Accessories",
    "G-10 Markaz",
    "Islamabad",
  ],

  authors: [{ name: "AR Stationers" }],

  creator: "AR Stationers",

  openGraph: {
    title: "AR Stationers",
    description:
      "Printing, Photocopy, Stationery & Office Supplies in Islamabad.",
    url: "https://ar-stationers.vercel.app",
    siteName: "AR Stationers",
    locale: "en_PK",
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
        {children}
      </body>
    </html>
  );
}