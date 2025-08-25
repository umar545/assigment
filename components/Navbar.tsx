// components/NavBar.tsx
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function NavBar() {
  return (
    <nav className="w-full border-b bg-white fixed z-10">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg">BeliBeli.com</span>
        </div>

        <div className="hidden md:flex items-center space-x-2 w-1/2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="min-w-[150px] justify-between"
              >
                All Category
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Electronics</DropdownMenuItem>
              <DropdownMenuItem>Clothing</DropdownMenuItem>
              <DropdownMenuItem>Accessories</DropdownMenuItem>
              <DropdownMenuItem>Home & Living</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Sports</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Golf</DropdownMenuItem>
                  <DropdownMenuItem>Football</DropdownMenuItem>
                  <DropdownMenuItem>Tennis</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>

          <Input placeholder="Search product or brand..." />
        </div>

        <div className="hidden md:flex items-center space-x-4 text-sm">
          <a href="#">Mitra BeliBeli</a>
          <a href="#">About</a>
          <a href="#">Promo</a>
          <Button variant="outline" size="sm">
            Sign Up
          </Button>
          <Button size="default">Login</Button>
        </div>
      </div>
    </nav>
  );
}
