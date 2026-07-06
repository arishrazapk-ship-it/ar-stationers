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
// Today's Revenue
const currentDate = new Date();

const todayRevenue = orders
  .filter((order: any) => {
    if (!order.createdAt) return false;

    const date = new Date(order.createdAt);

    return (
      date.toDateString() ===
      currentDate.toDateString()
    );
  })
  .reduce((sum: number, order: any) => sum + order.total, 0);

// Average Order Value
const averageOrder =
  orders.length > 0
    ? Math.round(totalRevenue / orders.length)
    : 0;

  const lowStock = products.filter(
    (item) => item.stock <= 5
  );
const today = new Date().toDateString();

const todayOrders = orders.filter((order: any) => {
  const orderDate = new Date(order.createdAt).toDateString();
  return orderDate === today;
});
const productSales: Record<string, number> = {};

orders.forEach((order: any) => {
  order.items.forEach((item: any) => {
    if (!productSales[item.name]) {
      productSales[item.name] = 0;
    }

    productSales[item.name] += item.quantity;
  });
});

const topProducts = Object.entries(productSales)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5);

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
    <>
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

  {/* Total Products */}
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-gray-500">
      Total Products
    </h2>

    <p className="text-4xl font-bold mt-4">
      {products.length}
    </p>
  </div>

  {/* Total Orders */}
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-gray-500">
      Total Orders
    </h2>

    <p className="text-4xl font-bold mt-4">
      {orders.length}
    </p>
  </div>

  {/* Revenue */}
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-gray-500">
      Revenue
    </h2>

    <p className="text-4xl font-bold text-green-600 mt-4">
      Rs. {totalRevenue}
    </p>
  </div>

  {/* Today's Revenue */}
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-gray-500">
      Today's Revenue
    </h2>

    <p className="text-4xl font-bold text-blue-600 mt-4">
      Rs. {todayRevenue}
    </p>
  </div>

  {/* Today's Orders */}
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-gray-500">
      Today's Orders
    </h2>

    <p className="text-4xl font-bold text-indigo-600 mt-4">
      {todayOrders.length}
    </p>
  </div>

  {/* Average Order */}
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-gray-500">
      Average Order
    </h2>

    <p className="text-4xl font-bold text-purple-600 mt-4">
      Rs. {averageOrder}
    </p>
  </div>

  {/* Low Stock */}
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-gray-500">
      Low Stock
    </h2>

    <p className="text-4xl font-bold text-red-600 mt-4">
      {lowStock.length}
    </p>
  </div>

</div>

      <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">
          Sales Analytics
        </h2>

        <Line data={chartData} />
      </div>

      <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">
          Recent Orders
        </h2>
<div className="mt-10 bg-white rounded-xl shadow-lg p-6">

  <h2 className="text-2xl font-bold mb-6">
    🏆 Top Selling Products
  </h2>

  {topProducts.length === 0 ? (
    <p className="text-gray-500">
      No sales yet.
    </p>
  ) : (
    <div className="space-y-4">

      {topProducts.map(([name, qty], index) => (
        <div
          key={name}
          className="flex justify-between items-center border-b pb-3"
        >
          <div>
            <span className="font-bold">
              #{index + 1}
            </span>

            <span className="ml-3">
              {name}
            </span>
          </div>

          <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
            Sold: {qty}
          </span>
        </div>
      ))}

    </div>
  )}

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
    </>
  );
}