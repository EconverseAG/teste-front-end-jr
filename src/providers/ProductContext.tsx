import { createContext, useContext, useState} from "react"
import jsonData from "../data/products"

interface IChildrenProps{
    children: React.ReactNode
}

interface IProduct{
    productName:string,
    descriptionShort:string,
    photo:string,
    price:number
}

interface IProductContext{
    products:IProduct[],
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export const ProductContext = createContext({} as IProductContext)

export function ProductProvider({children}:IChildrenProps){
    const [products, setProducts] = useState(jsonData.products)

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    )

}