import { useCallback, useEffect } from "react"
import { api } from "./lib/axios"
import { Home } from "./pages/Home";
import './styles/global.scss'

export function App() {
  const getProductData = useCallback(async () => {
    const response = await api.get("");
    const { products } = await response.data;
    console.log({ products })
  }, [])

  useEffect(() => {
    getProductData()
  }, [getProductData])

  return (
    <>
      <Home />
    </>
  )
}

