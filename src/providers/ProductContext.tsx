import { createContext, useState} from "react"
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
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>,
    openModal: IProduct | null,
    setOpenModal: React.Dispatch<React.SetStateAction<IProduct | null>>,
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
    filteredProducts: string,
    setFilteredProducts: React.Dispatch<React.SetStateAction<string>>
}

export const ProductContext = createContext({} as IProductContext)

export function ProductProvider({children}:IChildrenProps){
    const [products, setProducts] = useState<IProduct[]>(jsonData.products)
    const [openModal, setOpenModal] = useState<IProduct | null>(null)
    const [count, setCount] = useState(1)
    const [filteredProducts, setFilteredProducts] = useState("")

    return (
        <ProductContext.Provider value={{ products, setProducts, openModal, setOpenModal, 
        count, setCount, filteredProducts, setFilteredProducts 
        }}>
            {children}
        </ProductContext.Provider>
    )

}