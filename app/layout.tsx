import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AR Stationers",
  description: "Printing, Stationery & Computer Accessories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-gray-100">
        {children}
      </body>
    </html>
  );
}