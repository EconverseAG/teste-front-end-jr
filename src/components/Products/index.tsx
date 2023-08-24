import {  useContext} from "react"
import { ProductContext } from "../../providers/ProductContext"
import "./styles.scss"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Products(){
    const {products } = useContext(ProductContext)

    const originalPrice = products.map((product)=>{
        return product.price * 1.2
    })

    const halfPrice = products.map((product)=>{
        return product.price * 0.5
    })

    console.log(originalPrice)

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1095 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1095, min: 768 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1
        }
      };

    return (
        <div className="container">
            <Carousel responsive={responsive} containerClass="carousel-container">
                {
                    products.map((product, index)=>(
                        <div className="li-product" key={index}>
                            <img src={product.photo}/>
                            <p>{product.descriptionShort}</p>
                            <p>R$ {originalPrice[index]}</p>
                            <p>R$ {product.price}</p>
                            <p>ou 2x de R$ {halfPrice[index]} sem juros</p>
                            <span>Frete grátis</span>
                            <button>Comprar</button>
                        </div>

                    ))
                }
            </Carousel>
        </div>
    )
}

export default Products