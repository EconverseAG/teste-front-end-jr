import {  useContext} from "react"
import { ProductContext } from "../../providers/ProductContext"
import "./styles.scss"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Modal from "../Modal";


function Products(){
    const {products, openModal, setOpenModal, filteredProducts } = useContext(ProductContext)

    const searchProducts = products.filter((product)=>{
        if(filteredProducts ==""){
          return true
        }

        return product.productName.toLowerCase().includes(filteredProducts.toLowerCase())
    })


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
                    searchProducts.map((product, index)=>(
                        <div className="li-product" key={index}>
                            <img src={product.photo} alt={product.descriptionShort}/>
                            <p className="description">{product.descriptionShort}</p>
                            <p className="original-price">R$ {product.price * 1.2}</p>
                            <p className="price">R$ {product.price}</p>
                            <p className="half-price">ou 2x de R$ {product.price * 0.5} sem juros</p>
                            <span className="freight">Frete grátis</span>
                            <button onClick={()=>setOpenModal(product)}>COMPRAR</button>
                        </div>

                    ))
                }
            </Carousel>
            {openModal && <Modal />}
        </div>
    )
}

export default Products