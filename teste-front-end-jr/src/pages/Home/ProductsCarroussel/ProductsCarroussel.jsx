import { useState } from 'react'
import styles from './ProductsCarroussel.module.css'
import { useFetchData } from '../../../hooks/useFetchData'
import ProductCard from '../../../components/ProductCard/ProductCard'

const ProductsCarroussel = () => {

    const { products } = useFetchData()
    console.log(products)
    const [category, setCategory] = useState('Ver todos')

    const items = [
        { name: 'Celular' },
        { name: 'Acessórios' },
        { name: 'Tablets' },
        { name: 'Notebooks' },
        { name: 'Tvs' },
        { name: 'Ver todos' },
    ]

    return (
        <section className={styles.container}>
            <nav>
                <ul>
                    {
                        items.map((item, index) => (
                            <li key={index} onClick={() => setCategory(item.name)}>
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <main>
                {/* <img src="" alt="" /> */}
                <div>
                    {products && products.length > 0 ? products.map((product, index) => (
                        <>
                            <ProductCard product={product} />
                        </>
                    )) : ''}
                </div>
                {/* <img src="" alt="" /> */}

            </main>
        </section>
    )
}

export default ProductsCarroussel