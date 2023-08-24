import styles from './ProductCard.module.css'

const ProductCard = ({ product }) => {

    console.log(product)
    return (
        <div className={styles.container}>
            <img src={product.photo} alt="" />
            <h2>{product.productName}</h2>
            <p className={styles.price_line}>{product.price}</p>
            <p className={styles.price_common}>{product.price}</p>
            <p className={styles.price_buy}>ou 2x de R$ 49,95 sem juros</p>
            <p className={styles.free}>Frete grátis</p>
            <button className={styles.btn} onClick={() => {}}>Comprar</button>
        </div>
    )
}

export default ProductCard