"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { addOrder } from "../admin/services/orderService";
export default function CheckoutPage() {
const { cart } = useCart();

const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const [notes, setNotes] = useState("");

const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

  return (
    <div className="max-w-3xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <div className="space-y-5">

        
        <input
  type="text"
  placeholder="Full Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full border rounded-lg p-4"
/>


       <input
  type="tel"
  placeholder="Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full border rounded-lg p-4"
/>

        <textarea
  rows={4}
  placeholder="Delivery Address"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  className="w-full border rounded-lg p-4"
/>

       <textarea
  rows={3}
  placeholder="Order Notes (Optional)"
  value={notes}
  onChange={(e) => setNotes(e.target.value)}
  className="w-full border rounded-lg p-4"
/>

        <button
onClick={async () => {
    if (!name || !phone || !address) {
      alert("Please fill all required fields.");
      return;
    }

    const products = cart
      .map(
        (item) =>
          `• ${item.name}\n  Qty: ${item.quantity}\n  Price: Rs. ${item.price * item.quantity}`
      )
      .join("\n\n");

    const message = `Assalam-o-Alaikum,

🛒 New Order

👤 Customer: ${name}

📞 Phone: ${phone}

📍 Address:
${address}

📦 Products:
${products}

💰 Grand Total: Rs. ${total}

📝 Notes:
${notes || "No Notes"}

Thank you.`;

await addOrder({
  customerName: name,
  phone,
  address,
  notes,
  items: cart,
  total,
  status: "Pending",
  createdAt: Date.now(),
});

    window.open(
      `https://wa.me/923407488658?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }}
  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold"
>
  📱 Place Order on WhatsApp
</button>

      </div>

    </div>
  );
}