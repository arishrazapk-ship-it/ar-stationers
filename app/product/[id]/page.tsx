import {
  getProductById,
  getProducts,
} from "../../admin/services/productService";
import ProductGallery from "../../../components/ProductGallery";
import AddToCartButton from "../../../components/AddToCartButton";
import Link from "next/link";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product: any = await getProductById(id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto p-10">
        <h1 className="text-3xl font-bold text-red-600">
          Product Not Found
        </h1>
      </div>
    );
  }

  const allProducts: any[] = await getProducts();

  const relatedProducts = allProducts.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <div className="max-w-7xl mx-auto p-10">

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <ProductGallery
            images={product.images || [product.image]}
          />
        </div>

        <div>

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-3xl text-green-600 mt-5 font-bold">
            Rs. {product.price}
          </p>

          <p className="mt-6 text-gray-700">
            {product.description}
          </p>

          <p className="mt-4">
            <b>Category:</b> {product.category}
          </p>

          <p className="mt-2">
            <b>Stock:</b> {product.stock}
          </p>

          <a
            href={`https://wa.me/923407488658?text=${encodeURIComponent(
              `Assalam-o-Alaikum,

I want to order:

${product.name}

Please share the price and availability.

Thanks.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-green-600 text-white px-8 py-4 rounded-lg font-bold"
          >
            Order on WhatsApp
          </a>

<AddToCartButton
  product={{
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
  }}
/>
        </div>

      </div>
            {/* Related Products */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8">
          Related Products
        </h2>

        {relatedProducts.length === 0 ? (
          <p className="text-gray-500">
            No related products found.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item: any) => (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-bold text-lg line-clamp-2">
                    {item.name}
                  </h3>

                  <p className="text-green-600 text-xl font-bold mt-2">
                    Rs. {item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}