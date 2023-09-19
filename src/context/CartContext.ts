import { createContext } from "react";

export interface ProductsData {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface CartContextType {
  isOpen: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
  products: ProductsData[];
  getProductName: (productName: string) => void;
  getProductData: () => ProductsData | undefined;
  qtdProduct: number;
  addQtdProduct: () => void;
  lessQtdProduct: () => void;
}

export const CartContext = createContext({} as CartContextType);
