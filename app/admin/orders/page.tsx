"use client";

import { useEffect, useState } from "react";
import {
  getOrders,
  updateOrderStatus,
} from "../services/orderService";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  async function loadOrders() {
    const data = await getOrders();
    setOrders(data);
  }

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Customer Orders
        </h1>

        <div className="space-y-6">

          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-lg p-6"
            >

              <div className="flex justify-between">

                <div>

                  <h2 className="text-2xl font-bold">
                    {order.customerName}
                  </h2>

                  <p>
                    📞 {order.phone}
                  </p>

                  <p>
                    📍 {order.address}
                  </p>

                </div>

                <div className="text-right">

                  <h3 className="text-2xl font-bold text-green-600">
                    Rs. {order.total}
                  </h3>

                <div className="mt-3">

  <span className="font-bold">
    Status:
  </span>

  <span className="ml-2 text-blue-700">
    {order.status}
  </span>

  <button
    onClick={async () => {
      await updateOrderStatus(
        order.id,
        "Delivered"
      );

      loadOrders();
    }}
    className="block mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
  >
    Mark as Delivered
  </button>

</div>

                </div>

              </div>

              <hr className="my-5" />

              <h3 className="font-bold mb-3">
                Ordered Products
              </h3>

              <div className="space-y-3">

                {order.items.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4"
                  >

                    <img
                      src={item.image}
                      className="w-16 h-16 rounded-lg object-cover"
                    />

                    <div>

                      <p className="font-bold">
                        {item.name}
                      </p>

                      <p>
                        Qty: {item.quantity}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}