"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { getOrders } from "../services/orderService";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const productData = await getProducts();
      const orderData = await getOrders();

      setProducts(productData);
      setOrders(orderData);
    }

    loadData();
  }, []);

  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  const lowStock = products.filter(
    (item) => item.stock <= 5
  );
const chartData = {
  labels: orders.map((_, index) => `Order ${index + 1}`),

  datasets: [
    {
      label: "Sales",
      data: orders.map((order) => order.total),

      borderColor: "rgb(37,99,235)",
      backgroundColor: "rgba(37,99,235,0.3)",
      tension: 0.4,
    },
  ],
};

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-gray-500">
            Total Products
          </h2>

          <p className="text-4xl font-bold mt-4">
            {products.length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-gray-500">
            Total Orders
          </h2>

          <p className="text-4xl font-bold mt-4">
            {orders.length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-gray-500">
            Revenue
          </h2>

          <p className="text-4xl font-bold mt-4 text-green-600">
            Rs. {totalRevenue}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-gray-500">
            Low Stock
          </h2>

          <p className="text-4xl font-bold mt-4 text-red-600">
            {lowStock.length}
          </p>
        </div>

      </div>
<div className="mt-10 bg-white rounded-xl shadow-lg p-6">
  <h2 className="text-2xl font-bold mb-6">
    Recent Orders
  </h2>
<div className="mt-10 bg-white rounded-xl shadow-lg p-6">
  <h2 className="text-2xl font-bold mb-6">
    Sales Analytics
  </h2>

  <Line data={chartData} />
</div>

  {orders.length === 0 ? (
    <p className="text-gray-500">
      No orders found.
    </p>
  ) : (
    <div className="space-y-4">
      {orders.slice(0, 5).map((order: any) => (
        <div
          key={order.id}
          className="flex justify-between items-center border-b pb-4"
        >
          <div>
            <h3 className="font-bold">
              {order.customerName}
            </h3>

            <p className="text-gray-500">
              {order.phone}
            </p>

            <p className="text-sm text-gray-400">
              {order.status}
            </p>
          </div>

          <div className="text-right">
            <p className="text-green-600 font-bold">
              Rs. {order.total}
            </p>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
    </div>
  );
}