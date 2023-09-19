import { ReactNode, useCallback, useEffect, useState } from "react";
import { CartContext, ProductsData } from "../context/CartContext";
import { api } from "../lib/axios";

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<ProductsData[]>([]);
  const [productName, setProductName] = useState('');
  const [qtdProduct, setQtdProduct] = useState(0);

  const getProductsData = useCallback(async () => {
    const response = await api.get('');
    const data = response.data.products;

    setProducts(data);
  }, [])

  useEffect(() => {
    getProductsData()
  }, [getProductsData])

  function getProductData() {
    return products.find(product => product.productName === productName);
  }

  function getProductName(productName: string) {
    return setProductName(productName);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setProductName('');
    setQtdProduct(0);
  }

  function addQtdProduct() {
    setQtdProduct(qtdProduct + 1);
  }

  function lessQtdProduct() {
    if (qtdProduct === 0) return;
    setQtdProduct(qtdProduct - 1);
  }

  return (
    <CartContext.Provider value={{
      isOpen,
      onCloseModal: closeModal,
      onOpenModal: openModal,
      products,
      getProductData,
      getProductName,
      qtdProduct,
      addQtdProduct,
      lessQtdProduct
    }} >
      {children}
    </CartContext.Provider>
  )
}
