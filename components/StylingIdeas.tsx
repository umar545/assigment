"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { stylingProducts, type Product } from "@/lib/utils/stylingProducts";

const parsePrice = (price: string): number =>
  parseInt(price.replace(/[^\d]/g, ""), 10);

export function StylingIdeas(): JSX.Element {
  const totalPrice: number = stylingProducts.reduce(
    (sum, p) => sum + parsePrice(p.price),
    0
  );
  const totalOldPrice: number = stylingProducts.reduce(
    (sum, p) => sum + parsePrice(p.oldPrice),
    0
  );
  const saving: number = totalOldPrice - totalPrice;

  return (
    <div className="bg-white rounded-lg border p-4 sm:p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Styling Ideas</h2>
        <Button
          variant="ghost"
          className="text-gray-500 hover:text-gray-700 text-sm font-normal"
        >
          See more
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex-shrink-0 h-100">
          <div className="w-48 h-100 bg-gray-100 rounded-lg flex items-center justify-center p-4">
            <img
              src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
              alt="Main product"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex-shrink-0 flex items-center justify-center lg:mt-20">
          <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer">
            <Plus className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="flex-1 bg-gray-100 rounded-lg p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stylingProducts.map((product: Product) => (
              <div key={product.id} className="bg-white rounded-lg p-3">
                <div className="w-full h-24 bg-gray-50 rounded-md mb-3 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xs font-medium text-gray-900 mb-2 line-clamp-2 leading-tight">
                  {product.name}
                </h3>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-gray-900">
                    {product.price}
                  </p>
                  <p className="text-xs text-red-400 line-through">
                    {product.oldPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 w-full lg:w-48">
          <Card className="border rounded-lg">
            <CardContent className="p-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Total
                  </h3>
                  <p className="text-xl font-bold text-gray-900">
                    Rp{totalPrice.toLocaleString("id-ID")}
                  </p>
                  <p className="text-sm text-green-600 font-medium">
                    Save Rp{saving.toLocaleString("id-ID")}
                  </p>
                </div>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-md py-2">
                  Add to Bag
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
