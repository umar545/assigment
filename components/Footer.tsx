"use client";

import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="text-xl sm:text-2xl font-bold">BeliBeli.com</div>
            <p className="text-gray-400 text-sm">
              "Let's Shop Beyond Boundaries"
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 bg-gray-600 rounded hover:bg-blue-600 transition"
              >
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 bg-gray-600 rounded hover:bg-sky-500 transition"
              >
                <Twitter size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 bg-gray-600 rounded hover:bg-pink-500 transition"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="p-2 bg-gray-600 rounded hover:bg-red-600 transition"
              >
                <Youtube size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* BeliBeli */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              BeliBeli
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">
                About BeliBeli
              </li>
              <li className="hover:text-white cursor-pointer">Career</li>
              <li className="hover:text-white cursor-pointer">Mitra Blog</li>
              <li className="hover:text-white cursor-pointer">B2B Digital</li>
            </ul>
          </div>

          {/* Buy */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Buy
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Bill & Top Up</li>
              <li className="hover:text-white cursor-pointer">BeliBeli COD</li>
              <li className="hover:text-white cursor-pointer">Mitra Blog</li>
              <li className="hover:text-white cursor-pointer">Promo</li>
            </ul>
          </div>

          {/* Sell */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Sell
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Seller Education Center
              </li>
              <li className="hover:text-white cursor-pointer">
                Brand Partnership
              </li>
              <li className="hover:text-white cursor-pointer">
                Register Official Store
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          © 2001 - 2023, BeliBeli.com
        </div>
      </div>
    </footer>
  );
}
