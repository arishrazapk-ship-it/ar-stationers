"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menu = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: "📊",
    },
    {
      name: "Products",
      href: "/admin",
      icon: "📦",
    },
    {
      name: "Orders",
      href: "/admin/orders",
      icon: "🛒",
    },
    {
      name: "Website",
      href: "/",
      icon: "🌐",
    },
  ];

  return (
    <aside className="w-72 bg-blue-900 text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-10">
        AR Stationers
      </h1>

      <div className="space-y-3">

        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-lg px-5 py-4 transition ${
              pathname === item.href
                ? "bg-yellow-400 text-black font-bold"
                : "hover:bg-blue-700"
            }`}
          >
            {item.icon} {item.name}
          </Link>
        ))}

      </div>

    </aside>
  );
}