// components/HeaderSection.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ProductHeader() {
  return (
    <section className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* LEFT: Product Image Gallery */}
      <div className="md:col-span-5 flex flex-col space-y-3">
        <div className="relative w-full aspect-square border rounded-lg">
          <Image src="/shirt.png" alt="Product" fill className="object-cover" />
        </div>
        <div className="flex space-x-2 overflow-x-auto">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="relative w-20 h-20 border rounded-md flex-shrink-0"
            >
              <Image
                src="/shirt.png"
                alt="thumb"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Product Details */}
      <div className="md:col-span-7 flex flex-col space-y-4">
        <h1 className="text-xl font-semibold">
          This Ben Hogan Men's Solid Ottoman Golf Polo Shirt
        </h1>

        {/* Ratings */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>⭐⭐⭐⭐⭐ 4.8</span>
          <span>•</span>
          <span>188 Reviews</span>
        </div>

        {/* Price */}
        <div>
          <p className="text-red-600 font-bold text-2xl">Rp187.500</p>
          <p className="line-through text-gray-400 text-sm">Rp250.000</p>
          <span className="text-green-600 text-sm font-medium">25% off</span>
        </div>

        {/* Sizes */}
        <div>
          <h4 className="font-medium mb-1">Select Size</h4>
          <div className="flex space-x-2">
            {["S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
              <Button key={size} variant="outline" size="sm">
                {size}
              </Button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex space-x-3">
          <Button className="flex-1">Buy this Item</Button>
          <Button variant="outline" className="flex-1">
            Add to Bag
          </Button>
        </div>

        {/* Store Info */}
        <div className="border-t pt-4 mt-4 text-sm">
          <p className="font-semibold">Barudak Disaster Mall</p>
          <p>Location: Tulungagung</p>
          <p>Rating Store: 96% | Chat Reply: 98%</p>
        </div>
      </div>
    </section>
  );
}
