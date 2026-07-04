"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
}

export default function ProductGallery({ images }: Props) {
  const allImages =
    images && images.length > 0 ? images : ["/no-image.png"];

  const [selectedImage, setSelectedImage] = useState(allImages[0]);

  return (
    <div className="space-y-5">
      {/* Main Image */}
      <div className="overflow-hidden rounded-2xl border bg-white shadow-lg">
        <Image
          src={selectedImage}
          alt="Product"
          width={700}
          height={700}
          priority
          className="w-full h-[450px] object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Thumbnail Images */}
      {allImages.length > 1 && (
        <div className="flex flex-wrap gap-3 justify-center">
          {allImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`overflow-hidden rounded-xl border-2 transition-all ${
                selectedImage === img
                  ? "border-blue-600 shadow-lg"
                  : "border-gray-300 hover:border-blue-400"
              }`}
            >
              <Image
                src={img}
                alt={`Product ${index + 1}`}
                width={90}
                height={90}
                className="h-20 w-20 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}