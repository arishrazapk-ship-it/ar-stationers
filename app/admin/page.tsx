"use client";
import { useState, useEffect } from "react";

import {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} from "./services/productService";
import { uploadImage } from "../context/lib/uploadImage";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
const [products, setProducts] = useState<any[]>([]);
const [editId, setEditId] = useState<string | null>(null);
async function loadProducts() {
  const data = await getProducts();
  setProducts(data);
}

useEffect(() => {
  loadProducts();
}, []);

  const handleSubmit = async () => {
  if (!name || !price || !category || !stock || !description) {
    alert("Please fill all fields.");
    return;
  }

  setLoading(true);

  try {
    let imageUrls: string[] = [];

    // اگر نئی Images منتخب کی گئی ہیں
    if (images.length > 0) {
      for (const file of images) {
        const url = await uploadImage(file);
        imageUrls.push(url);
      }
    }

    const productData = {
      name: name.trim(),
      price: Number(price),
      category: category.trim(),
      stock: Number(stock),
      description: description.trim(),
      image: imageUrls[0] || "",
      images: imageUrls,
    };

    if (editId) {
      await updateProduct(editId, productData);

      alert("Product Updated Successfully ✅");

      setEditId(null);
    } else {
      await addProduct({
        ...productData,
        createdAt: Date.now(),
      });

      alert("Product Added Successfully ✅");
    }

    await loadProducts();

    setName("");
    setPrice("");
    setCategory("");
    setStock("");
    setDescription("");
    setImages([]);
  } catch (error: any) {
    console.error(error);
    alert(error.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-blue-800 mb-8">
          AR Stationers Admin Panel
        </h1>

        <div className="grid gap-5">          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="border rounded-lg p-3"
          />

          <textarea
            placeholder="Description"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-lg p-3"
          />

          <input
  type="file"
  accept="image/*"
  multiple
  onChange={(e) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  }}
  className="border rounded-lg p-3"
/>

   {images.length > 0 && (
  <div className="text-green-600 font-semibold">
    {images.length} Images Selected
  </div>
)}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-700 hover:bg-blue-800 disabled:bg-gray-400 text-white py-4 rounded-lg font-bold"
          >
            {loading
  ? "Saving..."
  : editId
  ? "Update Product"
  : "Add Product"}
  
          </button>
<hr className="my-10" />

<h2 className="text-3xl font-bold mb-5">
  All Products
</h2>

<div className="space-y-4">
  {products.map((item: any) => (
    <div
      key={item.id}
      className="flex items-center justify-between border rounded-lg p-4 bg-gray-50"
    >
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 rounded-lg object-cover"
        />

        <div>
          <h3 className="font-bold text-lg">
            {item.name}
          </h3>

          <p className="text-green-600 font-bold">
            Rs. {item.price}
          </p>

          <p className="text-gray-500">
            {item.category}
          </p>
        </div>
      </div>
  {/* Edit Button */}
<button
  onClick={() => {
    setEditId(item.id);

    setName(item.name);
    setPrice(item.price.toString());
    setCategory(item.category);
    setStock(item.stock.toString());
    setDescription(item.description);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg mr-3"
>
  Edit
</button>
 {/* Delete Button */}
      <button
        onClick={async () => {
          if (confirm("Delete this product?")) {
            await deleteProduct(item.id);
            await loadProducts();
          }
        }}
        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
      >
        Delete
      </button>
    </div>
  ))}
</div>
        </div>

      </div>
    </div>
  );
}