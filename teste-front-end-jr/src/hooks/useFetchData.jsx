import { useState, useEffect } from "react";
import axios from 'axios'

export const useFetchData = () => {

    const [products, setProducts] = useState([])
    const [cancelled, setCancelled] = useState(false)

    const baseUrl = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

    useEffect(() => {

        const loadData = async () => {
            if (cancelled) return
            console.log(cancelled)

            try {
                const response = await axios.get(baseUrl)
                console.log(response)
                return (response?.status === 200 && setProducts(response?.data?.products)) || null
            } catch (error) {
                console.log(error)
            }
        }

        loadData()
    }, [products, cancelled])


    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { products }
}