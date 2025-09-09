"use client";

import useCartStore from "@/app/stores/cartStore";
import { ShoppingCart } from "lucide-react";

const ShoppingCartIcon = () => {
  const { cart, hasHydrated } = useCartStore();

  if (!hasHydrated) return null;
  return (
    <div className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-400  " />
      <span className="absolute -top-3 -right-3 bg-yellow-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
        {cart.length}
      </span>
    </div>
  );
};
export default ShoppingCartIcon;
