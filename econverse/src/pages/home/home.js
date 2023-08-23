import Modal from 'react-modal';
import Slider from 'react-slick';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from "../../layouts/header/header";
import Footer from "../../layouts/footer/footer";

// Define o elemento raiz do aplicativo para a acessibilidade
Modal.setAppElement('#root');

function Home(props) {
    const { list } = props;
    const [visibleItems, setVisibleItems] = useState(4);

    const [quantity, setQuantity] = useState(1); // seleciona a quantidade na modal
    const [modalIsOpen, setModalIsOpen] = useState(false); // Estado da modal
    const [selectedProduct, setSelectedProduct] = useState(null); // Produto selecionado para detalhes

    const partnerList = [
        { id: 1, nome: 'VTEX', description: 'Descrição do Parceiro 1' },
        { id: 2, nome: 'VTEX', description: 'Descrição do Parceiro 2' },
        { id: 3, nome: 'VTEX', description: 'Descrição do Parceiro 3' },
        { id: 4, nome: 'VTEX', description: 'Descrição do Parceiro 4' },
        { id: 5, nome: 'VTEX', description: 'Descrição do Parceiro 5' },
        { id: 6, nome: 'VTEX', description: 'Descrição do Parceiro 6' },
        { id: 7, nome: 'VTEX', description: 'Descrição do Parceiro 7' },
        { id: 8, nome: 'VTEX', description: 'Descrição do Parceiro 8' },
        { id: 9, nome: 'VTEX', description: 'Descrição do Parceiro 9' },
        { id: 10, nome: 'VTEX', description: 'Descrição do Parceiro 10' },
    ];

    const settingsPartners = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    const settingsProducts = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: visibleItems,
        slidesToScroll: 1,
    };

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setModalIsOpen(false);
    };

    const decreaseQuantiity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    return (
        <div>
            {<Header />}
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <p className="lead">Venha conhecer nossas</p>
                    <p className="lead">promoções</p>
                    <p className="lead">50% off nos produtos</p>
                    <div>
                        <button>Ver produto</button>
                    </div>
                </div>
            </div>
            <div>
                <button>Tecnologia</button>
                <button>Supermercado</button>
                <button>Bebidas</button>
                <button>Ferramentas</button>
                <button>Saúde</button>
                <button>Esporte e Fitness</button>
                <button>Moda</button>
            </div>
            <div>
                <h2>Produtos relacionados</h2>
            </div>
            <div>
                <Link>Celular</Link>
                <Link>Acessórios</Link>
                <Link>Tablets</Link>
                <Link>Notebooks</Link>
                <Link>Tvs</Link>
                <Link>Ver todos</Link>
            </div>
            <div>
                <Slider {...settingsProducts}>
                    {list.map((product, index) => (
                        <div key={index}>
                            <img src={product.photo} alt={product.nome} />
                            <p>{product.descriptionShort}</p>
                            <strong>R$ {product.price}</strong>
                            <div>
                                <button onClick={() => openModal(product)}>Comprar</button>
                            </div>
                        </div>
                    ))}
                </Slider>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Detalhes do Produto"
                >
                    {selectedProduct && (
                        <div>
                            <img src={selectedProduct.photo} alt={selectedProduct.nome} />
                            <h2>{selectedProduct.productName}</h2>
                            <strong>R$ {selectedProduct.price}</strong>
                            <p>{selectedProduct.descriptionShort}</p>
                            <a href="#">Veja mais detalhes do produto</a>
                            <div>
                                <button onClick={decreaseQuantiity}>-</button>
                                <span>{quantity}</span>
                                <button onClick={increaseQuantity}>+</button>
                            </div>
                            <button onClick={closeModal}>Comprar</button>
                        </div>
                    )}

                </Modal>
            </div>
            <div>
                <div>
                    <h3>Parceiros</h3>
                    <p>Lorem ipsum dolor</p>
                    <button>Confira</button>
                </div>
                <div>
                    <h3>Parceiros</h3>
                    <p>Lorem ipsum dolor</p>
                    <button>Confira</button>
                </div>
            </div>
            <div>
                <div>
                    <h2>Produtos relacionados</h2>
                    <a href="#">Ver todos</a>
                </div>
                <div>
                    <div>
                        <h3>Produtos</h3>
                        <p>Lorem ipsum dolor</p>
                        <button>Confira</button>
                    </div>
                    <div>
                        <h3>Produtos</h3>
                        <p>Lorem ipsum dolor</p>
                        <button>Confira</button>
                    </div>
                </div>
            </div>
            <div>
                <h3>Navegue por marcas</h3>
                <div>
                    <Slider {...settingsPartners}>
                        {partnerList.map((partiner, index) => (
                            <div key={index}>
                                <p>{partiner.nome}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;