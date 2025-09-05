"use client";

import { ShoppingCart } from "lucide-react";

const ShoppingCartIcon = () => {
  return (
    <div className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-400  " />
      <span className="absolute -top-3 -right-3 bg-yellow-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
        0
      </span>
    </div>
  );
};
export default ShoppingCartIcon;
