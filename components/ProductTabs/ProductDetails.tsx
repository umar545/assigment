"use client";

import React from "react";

export const ProductDetails: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Product Details
        </h2>
        <div className="prose prose-gray max-w-none">
          <p>
            This Ben Hogan Men's Solid Ottoman Golf Polo Shirt makes for
            versatile casual wear or golf apparel. Built-in moisture wicking and
            sun protection keeps you feeling dry while blocking out harmful UV
            rays. Durable textured Ottoman fabric and a ribbed collar with
            three-button placket give it classic polo style. The solid color
            makes this golf easy to pair up with any pants or shorts and the
            relaxed fit style that looks great both on and off the course.
          </p>
        </div>
      </div>

      <div className="rounded-lg flex flex-col gap-2 px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
          <p className="text-gray-600 w-full md:w-56">Package Dimensions</p>
          <span className="hidden md:block w-6 text-center font-medium">:</span>
          <p className="text-gray-900 font-medium flex-1">
            27.3 x 24.8 x 4.9 cm; 180 g
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
          <p className="text-gray-600 w-full md:w-56">Specification</p>
          <span className="hidden md:block w-6 text-center font-medium">:</span>
          <p className="text-gray-900 font-medium flex-1">
            Moisture Wicking, Stretchy, SPF/UV Protection, Easy Care
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
          <p className="text-gray-600 w-full md:w-56">Date First Available</p>
          <span className="hidden md:block w-6 text-center font-medium">:</span>
          <p className="text-gray-900 font-medium flex-1">August 08, 2023</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
          <p className="text-gray-600 w-full md:w-56">Department</p>
          <span className="hidden md:block w-6 text-center font-medium">:</span>
          <p className="text-gray-900 font-medium flex-1">Men</p>
        </div>
      </div>
    </div>
  );
};
