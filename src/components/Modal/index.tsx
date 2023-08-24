import { ProductContext } from "../../providers/ProductContext"
import "./styles.scss"
import { useContext} from "react"
import { toast } from "react-toastify"


function Modal(){

    const {setOpenModal, openModal, count, setCount} = useContext(ProductContext)

    function subtractItem(){

        if(count > 1){
            setCount((count)=> count -1)
        }
    }

    function closeModal(){
        setOpenModal(null)
        setCount(1)
    }

    function buyItem(){
        setOpenModal(null)
        toast.success(`Compra realizada: 0${count} - ${openModal?.productName}`)
        setCount(1)
        
    }

     return(

        <div >
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3></h3>
                        <button onClick={closeModal}>X</button>
                    </div>
                    <div className="div-content" >
                        <div>
                            <img src={openModal?.photo} alt={openModal?.descriptionShort} />
                        </div>
                        <div className="modal-text">
                            <p className="p-product-name">{openModal?.productName}</p>
                            <p className="p-product-price">R$ {openModal!.price * count}</p>
                            <p className="p-product-description" >{openModal?.descriptionShort}</p>
                            <p className="p-product-detail">Veja mais detalhes do produto &gt;</p>
                            <div className="div-counter">
                                <button onClick={subtractItem}>-</button>
                                <p>{count}</p>
                                <button onClick={()=>setCount((count)=>count +1)}>+</button>
                            </div>
                            <button className="button-buy" onClick={buyItem}>COMPRAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal