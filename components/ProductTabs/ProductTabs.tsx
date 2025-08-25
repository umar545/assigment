"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductDetails } from "./ProductDetails";
import { StylingIdeas } from "../StylingIdeas";
import { ReactNode } from "react";

type TabValue = "description" | "styling" | "bestseller" | "report";

interface ProductTabsProps {
  defaultValue?: TabValue;
  children?: ReactNode;
}

export function ProductTabs({
  defaultValue = "description",
}: ProductTabsProps) {
  return (
    <Tabs
      defaultValue={defaultValue}
      className="space-y-6 bg-gray-50 p-4 rounded-lg flex-wrap"
    >
      <div className="flex justify-between items-center">
        <TabsList className="flex flex-wrap gap-3 justify-start md:justify-center">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="styling">Styling Ideas</TabsTrigger>
          <TabsTrigger value="bestseller">Best Seller</TabsTrigger>
          <TabsTrigger value="report">Report Product</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent
        value="description"
        className="space-y-6 bg-white p-4 rounded-md shadow"
      >
        <ProductDetails />
      </TabsContent>

      <TabsContent
        value="styling"
        className="space-y-6 bg-white p-4 rounded-md shadow"
      >
        <StylingIdeas />
      </TabsContent>

      {/* Empty placeholders for other tabs */}
      <TabsContent
        value="bestseller"
        className="space-y-6 bg-white p-4 rounded-md shadow"
      >
        <p>Best seller products go here.</p>
      </TabsContent>

      <TabsContent
        value="report"
        className="space-y-6 bg-white p-4 rounded-md shadow"
      >
        <p>Report form or message goes here.</p>
      </TabsContent>
    </Tabs>
  );
}
