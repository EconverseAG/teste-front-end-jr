import React from 'react';
//import Axios from 'axios'
import './Vitrine.css';
import { /*useEffect,*/ useState } from 'react';
import Modal from './Modal/Modal';
import rightArrow from './right-arrow.png';
import leftArrow from './left-arrow.png';

function Vitrine() {

  /* const[ products, setProducts ]= useState([])

    useEffect(() => {
        Axios.get("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
        .then((response)=>{
            setProducts(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    */
    const [openModal, setOpenModal]= useState(false);
    return (
        <div>
            {/*{products.map((product)=>{
                return (*/}
                    <div id="vitrine">
                        <img id="arrow" src={leftArrow} alt=''/>
                        <div id="item" onClick={()=> setOpenModal(true)}>
                                        <img id="cell" src= 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png' alt=''/>
                                        <p id="VitrineText">Iphone 11 PRO MAX BRANCO 1</p>
                                        <p id='BeforePrice'>R$ 17 000,00</p>
                                        <p id='CurrentPrice'>R$ 15 000,00</p>
                                        <p id='InstallmentPrice'>ou 10x de R$ 1 500,00 sem juros</p>
                                        <p id='Frete'>Frete grátis</p>
                                        <button id="buy">COMPRAR</button>
                                    </div>
                                    <Modal isOpen={openModal} setModalOpen={()=>setOpenModal(!openModal)}/>
                                    <div id="item" onClick={()=> setOpenModal(true)}>
                                        <img id="cell" src= 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png' alt=''/>
                                        <p id="VitrineText">IPHONE 13 MINI 1</p>
                                        <p id='BeforePrice'>R$ 11 000,00</p>
                                        <p id='CurrentPrice'>R$ 9 000,00</p>
                                        <p id='InstallmentPrice'>ou 10x de R$ 900,00 sem juros</p>
                                        <p id='Frete'>Frete grátis</p>
                                        <button id="buy">COMPRAR</button>
                                    </div>
                                    <div id="item" onClick={()=> setOpenModal(true)}>
                                        <img id="cell" src= 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png' alt=''/>
                                        <p id="VitrineText">Iphone 11 PRO MAX BRANCO 2</p>
                                        <p id='BeforePrice'>R$ 16 990,00</p>
                                        <p id='CurrentPrice'>R$ 14 990,00</p>
                                        <p id='InstallmentPrice'>ou 10x de R$ 1 499,00 sem juros</p>
                                        <p id='Frete'>Frete grátis</p>
                                        <button id="buy">COMPRAR</button>
                                    </div>
                                    <div id="item" onClick={()=> setOpenModal(true)}>
                                        <img id="cell" src= 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png' alt=''/>
                                        <p id="VitrineText">IPHONE 13 MINI 2</p>
                                        <p id='BeforePrice'>R$ 14 000,00</p>
                                        <p id='CurrentPrice'>R$ 12 000,00</p>
                                        <p id='InstallmentPrice'>ou 10x de R$ 1 200,00 sem juros</p>
                                        <p id='Frete'>Frete grátis</p>
                                        <button id="buy">COMPRAR</button>
                                    </div>        
                        <img id="arrow" src={rightArrow} alt=''/>
                    </div>
                {/*)*/}
        {/*})}*/}
        </div>
    );

}

export default Vitrine;