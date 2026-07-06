"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { addOrder } from "../admin/services/orderService";
export default function CheckoutPage() {
const { cart, clearCart } = useCart();

const router = useRouter();

const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const [notes, setNotes] = useState("");
const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
const [transactionId, setTransactionId] = useState("");

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
{/* Payment Method */}
{/* EasyPaisa / JazzCash Details */}

{paymentMethod !== "Cash on Delivery" && (
  <div className="border rounded-lg p-5 bg-green-50">

    <h2 className="text-xl font-bold mb-4">
      {paymentMethod} Payment
    </h2>

    <div className="bg-white p-4 rounded-lg border mb-4">

      <p className="font-semibold">
        Send Payment To:
      </p>

      <p className="text-2xl font-bold text-green-700 mt-2">
        0340-7488658
      </p>

      <p className="text-gray-600 mt-2">
        Account Name: Muhammad Arish
      </p>

    </div>

    <input
      type="text"
      placeholder="Enter Transaction ID"
      value={transactionId}
      onChange={(e) => setTransactionId(e.target.value)}
      className="w-full border rounded-lg p-4"
    />

  </div>
)}

<div className="border rounded-lg p-5">

  <h2 className="text-xl font-bold mb-4">
    💳 Select Payment Method
  </h2>

  <div className="space-y-3">

    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        value="Cash on Delivery"
        checked={paymentMethod === "Cash on Delivery"}
        onChange={(e) =>
          setPaymentMethod(e.target.value)
        }
      />
      Cash on Delivery
    </label>

    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        value="EasyPaisa"
        checked={paymentMethod === "EasyPaisa"}
        onChange={(e) =>
          setPaymentMethod(e.target.value)
        }
      />
      EasyPaisa
    </label>

    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        value="JazzCash"
        checked={paymentMethod === "JazzCash"}
        onChange={(e) =>
          setPaymentMethod(e.target.value)
        }
      />
      JazzCash
    </label>

  </div>

</div>

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
if (
  paymentMethod !== "Cash on Delivery" &&
  !transactionId
) {
  alert("Please enter Transaction ID.");
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

💳 Payment Method:
${paymentMethod}

${
  paymentMethod !== "Cash on Delivery"
    ? `🧾 Transaction ID:
${transactionId}`
    : ""
}

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
  paymentMethod,
  transactionId,
  status: "Pending",
  createdAt: Date.now(),
});

    window.open(
      `https://wa.me/923407488658?text=${encodeURIComponent(message)}`,
      "_blank"
    );
clearCart();

setTimeout(() => {
  router.push("/order-success");
}, 1000);

  }}
  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold"
>
  📱 Place Order on WhatsApp
</button>

      </div>

    </div>
  );
}