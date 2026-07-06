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
const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");

  const [products, setProducts] = useState<any[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);
const categories = [
  "All",
  ...new Set(products.map((item: any) => item.category)),
];

const filteredProducts = products.filter((item: any) => {
  const matchesSearch =
    item.name.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    item.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  const handleSubmit = async () => {
    if (!name || !price || !category || !stock || !description) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      let imageUrls: string[] = [];

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
    <>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">

          <h1 className="text-4xl font-bold text-blue-800 mb-8">
            AR Stationers Admin Panel
          </h1>

          <div className="grid gap-5">

            <input
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
              rows={5}
              placeholder="Description"
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

            <hr className="my-8" />

          <div className="flex justify-between items-center mb-5">
  <h2 className="text-3xl font-bold">
    All Products
  </h2>

  <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
    {filteredProducts.length} Products
  </span>
</div>

<div className="grid md:grid-cols-2 gap-4 my-6">

  <input
    type="text"
    placeholder="🔍 Search Product..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="border rounded-lg p-3"
  />

  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="border rounded-lg p-3"
  >
    {categories.map((cat) => (
      <option key={cat}>
        {cat}
      </option>
    ))}
  </select>

</div>

            <div className="space-y-4">
              {filteredProducts.map((item: any) => (
                <div
                  key={item.id}
                 className="flex items-center justify-between border rounded-xl p-5 bg-white shadow hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-xl object-cover border hover:scale-105 transition-all"
                    />

                    <div>
                      <h3 className="font-bold text-lg">
                        {item.name}
                      </h3>

                      <p className="text-green-600 font-bold">
                        Rs. {item.price}
                      </p>

                      <div className="mt-2">

  {item.stock === 0 ? (
    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
      Out of Stock
    </span>
  ) : item.stock <= 5 ? (
    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
      Low Stock ({item.stock})
    </span>
  ) : (
    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
      In Stock ({item.stock})
    </span>
  )}

</div>

                    </div>

                  </div>

                  <div className="flex gap-3">

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
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
                    >
                      Edit
                    </button>

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
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </>
  );
}