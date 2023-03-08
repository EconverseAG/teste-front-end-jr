import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import '../Styles/CardsLayout.css';
import tecnologia from "../Images/tecnologia.svg";
import supermercado from "../Images/supermercados.svg";
import bebidas from "../Images/whiskey.svg";
import ferramentas from "../Images/ferramentas.svg";
import corrida from "../Images/corrida.svg";
import saude from "../Images/saude.svg";
import moda from "../Images/moda.svg";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Modal from "../Components/Modal"

export const PaginaCards = () => {

    const [data, setData] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false)
    const dados = !data ? data : "carregando"

    useEffect(() => {
        axios.get("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
            .then((response) => {
                setData(response.data.products)
            })
            .catch((error) => console.log(error))
    }, [])


    const listaProdutos = data && data.map((item) => {
        return <div className="box-carousel" key={item.id}>
            <div className="box-informacoes-carousel">
                <div className="image-carousel">
                    <img src={item.photo} alt={item.productName} />
                </div>
                <div className="descricao-produto">{item.descriptionShort}</div>
                <div className="preco-antigo">R${((item.price * 0.1) + item.price).toFixed(2)}</div>
                <div className="preco-novo">R${item.price.toFixed(2)}</div>
                <div className="parcelamento">ou 2x de R$ {item.price / 2} sem juros</div>
                <div className="frete-gratis">Frete grátis</div>
                <button className="botao-carousel" onClick={()=> setModalVisible(true)}>COMPRAR</button>
                {isModalVisible? <Modal /> : null}
            </div>
        </div>
    })

    return (
        <div>
            <Header />
            <div className="container-cards">
                <div className="card-tecnologia">
                    <img className="images-tamanho" src={tecnologia} alt="tecnologia" />
                </div>
                <p id="frase-tecnologia">Tecnologia</p>
                <div className="card-supermercado">
                    <img className="images-tamanho" src={supermercado} alt="supermercado" />
                </div>
                <p id="frase-supermercado">Supermercado</p>
                <div className="card-bebidas">
                    <img className="images-tamanho" src={bebidas} alt="bebidas" />
                </div>
                <p id="frase-bebidas">Bebidas</p>
                <div className="card-ferramentas">
                    <img className="images-tamanho" src={ferramentas} alt="ferramentas" />
                </div>
                <p id="frase-ferramentas">Ferramentas</p>
                <div className="card-saude">
                    <img className="images-tamanho" src={saude} alt="saude" />
                </div>
                <p id="frase-saude">Saúde</p>
                <div className="card-esporte">
                    <img className="images-tamanho" src={corrida} alt="esporte e fitness" />
                </div>
                <p id="frase-esporte">Esporte e Fitness</p>
                <div className="card-moda">
                    <img className="images-tamanho" src={moda} alt="moda" />
                </div>
                <p id="frase-moda">Moda</p>
            </div>

            <div className="container-relacionados1">
                <hr className="linha1" />
                <p className="frase-relacionados">Produtos relacionados</p>
                <hr className="linha2" />
            </div>

            <div className="container-frames">
                <div className="box-celular">celular</div>
                <div className="box-acessorios">Acessórios</div>
                <div className="box-tablet">Tablets</div>
                <div className="box-notebook">Notebooks</div>
                <div className="box-tvs">TVS</div>
                <div className="box-todos">Ver todos</div>
            </div>

            <div className="carousel">
                {listaProdutos}
            </div>

            <div className="container-geral-parceiros">
                <div className="image-parceiros" id="image-config1">
                    <span className="frase-parceiros">Parceiros</span>
                    <span className="frase-lorem">Lorem ipsum dolor sit amet, consectetur</span>
                    <button className="botao-parceiros">confira</button>
                </div>
                <div className="image-parceiros" id="image-config2">
                    <span className="frase-parceiros">Parceiros</span>
                    <span className="frase-lorem">Lorem ipsum dolor sit amet, consectetur</span>
                    <button className="botao-parceiros">confira</button>
                </div>
            </div>

            <div className="container-relacionados2">
                <hr className="linha3" />
                <p className="frase-relacionados">Produtos relacionados</p>
                <hr className="linha4" />
                <span className="frase-ver-todos">Ver todos</span>
            </div>

            <div className="carousel2">
                {listaProdutos}
            </div>

            <span className="container-frase-marcas">Navegue por Marcas</span>

            <div className="container-marcas">
                <div id="marca1">
                    <span className="logo1" />
                </div>
                <div id="marca2">
                    <span className="logo1" />
                </div>
                <div id="marca3">
                    <span className="logo1" />
                </div>
                <div id="marca4">
                    <span className="logo1" />
                </div>
                <div id="marca5">
                    <span className="logo1" />
                </div>
                <div className="botao-chevron">
                    <div id="chevron" />
                </div>
            </div>

            <div className="container-relacionados3">
                <hr className="linha5" />
                <p className="frase-relacionados">Produtos relacionados</p>
                <hr className="linha6" />
                <span className="frase-ver-todos">Ver todos</span>
            </div>

            <div className="carousel3">
                {listaProdutos}
            </div>

            <div className="container-geral-produtos">
                <div className="image-produtos" >
                    <span id="frase-produtos1">Produtos</span>
                    <span id="frase-lorem-produtos1">Lorem ipsum dolor sit amet, consectetur</span>
                    <button id="botao-produtos1">confira</button>
                </div>
                <div className="image-produtos2" >
                    <span id="frase-produtos2">Produtos</span>
                    <span id="frase-lorem-produtos2">Lorem ipsum dolor sit amet, consectetur</span>
                    <button id="botao-produtos2">confira</button>
                </div>
            </div>
            <Footer />
        </div >
    )
};