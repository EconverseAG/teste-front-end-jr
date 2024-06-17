import React, {useState, useEffect, useRef} from 'react';

import 'styles/components/shelf-01.sass'

import { Product } from './Product';
import CardProduct from './CardProduct';
import ModalProduct from 'components/Modal';

const Shelf01: React.FC = () => {

    /*

    ESTOU USANDO FETCH POIS É UMA CHAMADA SIMPLES
    FIZ A REQUISIÇÃO PELA URL DESSA FORMA, MAS RECEBI UM ERRO DE CORS POR NÃO ESTAR NO MESMO DOMÍNIO E NÃO TER ACESSO.
    NESSE CASO CRIEI OUTRO ARQUIVO PARA SIMULAR ESSA CHAMADA.
    SE ESTIVESSE NO MESMO DOMÍNIO OU COM ACESSO, FARIA A CHAMADA DESSA FORMA:
    

    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
            .then(response => response.json())
            .then(data => setProducts(data.products))
    }, []);
    */


    // Script Produtos

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    
    useEffect(() => {
        fetch('/products.json')
        .then(response => response.json())
        .then(data => setProducts(data.products))
    }, []);
    

    // Script Modal

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };


    // Script Carrossel

    const [translate, setTranslate] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        if (carouselRef.current) {
            const newTranslate = translate - 10;
            if (newTranslate === -60) {
                setTranslate(0);
                carouselRef.current.style.transform = `translateX(0px)`;
            } else {
                setTranslate(newTranslate);
                carouselRef.current.style.transform = `translateX(${newTranslate}%)`;
            }
          }
    };

    const prevSlide = () => {
        if (carouselRef.current) {
            const newTranslate = translate + 10;
            if (newTranslate === 10) {
                setTranslate(-50);
                carouselRef.current.style.transform = `translateX(-50%)`;
            } else {
                setTranslate(newTranslate);
                carouselRef.current.style.transform = `translateX(${newTranslate}%)`;
            }
        }
      };



    return (
        <section className='shelf-01'>
            <div className='title-container'> <hr /> <h3>Produtos Relacionados</h3></div>
            <table className='type-product'>
                <tbody>
                    <tr>
                        <td>Celular</td>
                        <td>Acessórios</td>
                        <td>Tablets</td>
                        <td>notebooks</td>
                        <td>Tvs</td>
                        <td>Ver todos</td>
                    </tr>
                </tbody>
            </table>
            {products.length > 0 && (
                <div className='shelf-01-carousel'>
                    <div className='carousel-inner' ref={carouselRef}>
                        {products.map((product, index) => (
                            <CardProduct key={index} product={product} openModal={openModal} />
                        ))}
                    </div>
                    <button className='button-carousel button-carousel-left' onClick={prevSlide}>&#10094;</button>
                    <button className='button-carousel button-carousel-right' onClick={nextSlide}>&#10095;</button>
                </div>
            )}
            {isModalOpen && selectedProduct && (
                <ModalProduct product={selectedProduct} closeModal={closeModal} />
            )}
        </section>
    );
}

export default Shelf01;
