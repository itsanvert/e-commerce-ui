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
