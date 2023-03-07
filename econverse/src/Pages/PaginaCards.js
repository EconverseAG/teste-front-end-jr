import React from "react";
import '../Styles/CardsLayouts.css';
import tecnologia from "../Images/tecnologia.svg";
import supermercado from "../Images/supermercados.svg";
import bebidas from "../Images/whiskey.svg";
import ferramentas from "../Images/ferramentas.svg";
import corrida from "../Images/corrida.svg";
import saude from "../Images/saude.svg";
import moda from "../Images/moda.svg";


export const PaginaCards = () => {
    return (
        <div>
            <div className="container-cards">
                <div className="card-tecnologia">
                    <img className="images-tamanho" src={tecnologia} />
                </div>
                <p id="frase-tecnologia">Tecnologia</p>

                <div className="card-supermercado">
                    <img className="images-tamanho" src={supermercado} />
                </div>
                <p id="frase-supermercado">Supermercado</p>

                <div className="card-bebidas">
                    <img className="images-tamanho" src={bebidas} />
                </div>
                <p id="frase-bebidas">Bebidas</p>

                <div className="card-ferramentas">
                    <img className="images-tamanho" src={ferramentas} />
                </div>
                <p id="frase-ferramentas">Ferramentas</p>

                <div className="card-saude">
                    <img className="images-tamanho" src={saude} />
                </div>
                <p id="frase-saude">Saúde</p>

                <div className="card-esporte">
                    <img className="images-tamanho" src={corrida} />
                </div>
                <p id="frase-esporte">Esporte e Fitness</p>

                <div className="card-moda">
                    <img className="images-tamanho" src={moda} />
                </div>
                <p id="frase-moda">Moda</p>
            </div>

            <div className="container-relacionados">
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

            <div className="container-carousel">
        <div className="item">
            <div className="image-carousel"></div>
        </div>
            </div>
        </div>
    )
};