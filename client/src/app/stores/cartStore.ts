"use client";
import { CartStoreActionType, CartStoreStateType } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionType>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter((p) => p.id !== product.id),
        })),
      clearCart: () => set({ cart: [] }), // ✅ moved inside store
    }),
    {
      name: "cart", // storage key
      storage: createJSONStorage(() => localStorage), // ✅ explicit
    }
  )
);

export default useCartStore;
