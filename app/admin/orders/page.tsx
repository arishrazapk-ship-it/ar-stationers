"use client";

import { useEffect, useState } from "react";
import {
  getOrders,
  updateOrder,
} from "../services/orderService";

import { generateInvoice } from "../services/invoiceService";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
const [search, setSearch] = useState("");
const [filter, setFilter] = useState("All");
  async function loadOrders() {
    const data = await getOrders();
    setOrders(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);
const filteredOrders = orders.filter((order: any) => {
  const text = search.toLowerCase();

  const matchesSearch =
    order.customerName.toLowerCase().includes(text) ||
    order.phone.toLowerCase().includes(text);

  if (filter === "All") {
    return matchesSearch;
  }

  const orderDate = new Date(order.createdAt);
  const today = new Date();

  if (filter === "Today") {
    return (
      matchesSearch &&
      orderDate.toDateString() === today.toDateString()
    );
  }

  if (filter === "This Month") {
    return (
      matchesSearch &&
      orderDate.getMonth() === today.getMonth() &&
      orderDate.getFullYear() === today.getFullYear()
    );
  }

  return matchesSearch;
});

  async function loadProducts() {
    const data = await getOrders();
    setOrders(data);
  }

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">
        Customer Orders
      </h1>
<div className="mb-8">
  <input
    type="text"
    placeholder="🔍 Search by customer name or phone..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full border rounded-lg p-4"
  />
</div>
<div className="mb-8">
  <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="border rounded-lg p-3"
  >
    <option>All</option>
    <option>Today</option>
    <option>This Month</option>
  </select>
</div>

      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex justify-between items-start">

                <div>
                  <h2 className="text-2xl font-bold">
                    {order.customerName}
                  </h2>

                  <p className="mt-2">
                    📞 {order.phone}
                  </p>

                  <p className="mt-1">
                    📍 {order.address}
                  </p>
                </div>
<p className="mt-2">
  💳 <span className="font-bold">Payment:</span>{" "}
  {order.paymentMethod || "Cash on Delivery"}
</p>

{order.paymentMethod !== "Cash on Delivery" &&
  order.transactionId && (
    <p className="mt-1 text-green-700">
      🧾 <span className="font-bold">Transaction ID:</span>{" "}
      {order.transactionId}
    </p>
)}

                <div className="text-right">
                  <h3 className="text-2xl font-bold text-green-600">
                    Rs. {order.total}
                  </h3>

                  <div className="mt-4">
                    <span className="font-bold">
                      Status:
                    </span>

                    <span className="ml-2 text-blue-700">
                      {order.status}
                    </span>

                    <div className="flex flex-col gap-3 mt-4">

                      <select
  value={order.status}
  onChange={async (e) => {
    await updateOrder(order.id, {
      status: e.target.value as any,
    });

    loadOrders();
  }}
  className="border rounded-lg p-2 bg-white"
>
  <option value="Pending">
    🟡 Pending
  </option>

  <option value="Processing">
    🔵 Processing
  </option>

  <option value="Delivered">
    🟢 Delivered
  </option>

  <option value="Cancelled">
    🔴 Cancelled
  </option>
</select>
                      <button
                        onClick={() =>
                          generateInvoice(order)
                        }
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
                      >
                        📄 Download Invoice
                      </button>

                    </div>

                  </div>
                </div>

              </div>

              <hr className="my-6" />

              <h3 className="font-bold text-lg mb-4">
                Ordered Products
              </h3>

              <div className="space-y-4">
                {order.items.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />

                    <div>
                      <p className="font-bold">
                        {item.name}
                      </p>

                      <p>
                        Qty: {item.quantity}
                      </p>

                      <p className="text-green-600 font-semibold">
                        Rs. {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}