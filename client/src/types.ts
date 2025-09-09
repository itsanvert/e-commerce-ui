import z from "zod";

export type ProductType = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  sizes: string[];
  price: number;
  colors: string[];
  images: Record<string, string>;
};
export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectSize: string;
  selectColor: string;
};
export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email().min(1, "Email is invalid"),
  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 10 digits!")
    .max(10, "Phone number must be between 7 and 10 digits!")
    .regex(/^[0-9]+$/, "Phone number must contain only digits"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;
export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card holder is required!"),
  cardNumber: z.string().min(1, "Card number is required!"),
  expiryDate: z
    .string()
    .min(1, "Expiry date is required!")
    .regex(/^[0-9]+$/, "Expiry date must contain only digits"),
  cvv: z.string().min(1, "CVV is required!").max(3, "CVV is required!"),
});
export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;

export type CartStoreStateType = {
  cart: CartItemsType;
};

export type CartStoreActionType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
};
