"use client";

import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";

import {
  bestSellerProducts,
  type Product,
} from "@/lib/utils/bestSellerProducts";

export default function BestSeller() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 640px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 4 },
    },
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="space-y-4 sm:space-y-6 mt-10 mb-10">
      <div className="flex justify-between items-center">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
          Best Seller
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollPrev}
            className="w-8 h-8 p-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={scrollNext}
            className="w-8 h-8 p-0"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-3 sm:gap-4">
          {bestSellerProducts.map((product) => (
            <div
              key={product.id}
              className="embla__slide flex-[0_0_280px] sm:flex-[0_0_300px] min-w-0"
            >
              <Card className="group hover:shadow-lg transition-shadow relative h-full">
                <div
                  className={`absolute top-2 left-2 w-6 h-6 ${product.badgeColor} text-white rounded-full flex items-center justify-center text-xs font-bold z-10`}
                >
                  {product.badge}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 z-10  group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white w-8 h-8 p-0"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 sm:p-4 space-y-2 flex-1 flex flex-col">
                    <h3 className="font-medium text-gray-900 line-clamp-2 text-sm leading-tight flex-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-yellow-500">
                        {product.rating}
                      </span>
                      <span>• {product.sold}</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-base sm:text-lg font-bold text-gray-900">
                        {product.price}
                      </p>
                      {product.originalPrice !== product.price && (
                        <p className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
