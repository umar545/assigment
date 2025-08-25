"use client";

import { useState } from "react";
import {
  Star,
  Heart,
  Share,
  MessageCircle,
  ShoppingBag,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductImageCarousel } from "./ProductImageCarousel";
import StoreInfo from "./StoreInfo";

type Size = "S" | "M" | "L" | "XL" | "2XL" | "3XL";
type Color = "black" | "gray";

const sizes: Size[] = ["S", "M", "L", "XL", "2XL", "3XL"];

const ProductHeader: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<Size>("M");
  const [selectedColor, setSelectedColor] = useState<Color>("black");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8 mt-8">
      <div className="space-y-2 lg:space-y-6 ">
        <div className="text-xs text-left sm:text-sm hidden sm:block pt-2 pl-3">
          Home / Product / This Ben Hogan Men's Solid Ottoman Golf Polo Shirt
        </div>
        <ProductImageCarousel />
        <div className="hidden sm:block">
          <StoreInfo />
        </div>
      </div>

      <div className="space-y-4 lg:space-y-6 mt-16">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight">
            This Ben Hogan Men's Solid Ottoman Golf Polo Shirt
          </h1>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary" className="text-xs">
              10K+ Sold
            </Badge>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-1 text-xs sm:text-sm text-gray-600">4.8</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-600">
              168 Reviews
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="space-y-2">
          <div className="text-2xl sm:text-3xl font-bold text-gray-900">
            Rp187.500
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg text-gray-500 line-through">
              Rp250.000
            </span>
            <Badge variant="destructive" className="text-xs">
              25% off
            </Badge>
          </div>
        </div>

        {/* Color Selection */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-900">Color</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedColor("black")}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 transition-all ${
                selectedColor === "black"
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-300"
              } bg-black`}
            />
            <button
              onClick={() => setSelectedColor("gray")}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 transition-all ${
                selectedColor === "gray"
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-300"
              } bg-gray-400`}
            />
          </div>
        </div>

        {/* Size Selection */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-900">Select Size</h3>
            <button className="text-sm text-blue-600 hover:underline">
              Size Guide
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSize(size)}
                className="w-10 h-10 sm:w-12 sm:h-12 text-sm"
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            size="lg"
            className="w-full bg-gray-900 hover:bg-gray-800 h-11 sm:h-12"
          >
            Buy this item
          </Button>
          <Button variant="outline" size="lg" className="w-full h-11 sm:h-12">
            Add to Bag
          </Button>
        </div>

        {/* Additional Actions */}
        <div className="flex justify-between pt-3 border-t">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Chat
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-sm"
          >
            <Heart className="w-4 h-4" />
            Wishlist
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-sm"
          >
            <Share className="w-4 h-4" />
            Share
          </Button>
        </div>

        {/* Mobile Store Info */}
        <div className="sm:hidden">
          <StoreInfo />
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
