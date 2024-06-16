import React, {useState, useEffect} from 'react';

import 'styles/components/shelf-01.sass'

interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;

}

const Shelf01: React.FC = () => {

    /*

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

    const [products, setProducts] = useState<Product[]>();

    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setProducts(data.products))
    }, []);

    return (
        <section className='shelf-01'>
            <div className='title-container'> <hr /> <h3>Produtos Relacionados</h3></div>
            <table>
                <tr>
                    <td>Celular</td>
                    <td>Acessórios</td>
                    <td>Tablets</td>
                    <td>notebooks</td>
                    <td>Tvs</td>
                    <td>Ver todos</td>
                </tr>
            </table>
            {products && (
                <div className='shelf-01-carousel'>
                    {products.map((product, index) => (
                        <div key={index}>
                            <img src={product.photo} alt={product.productName} />
                            <h4>{product.productName}</h4>
                            <p>{product.descriptionShort}</p>
                            <p>Preço: R${product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );

    // return (
    //     <section className='shelf-01'>
    //         <h3>Produtos Relacionados</h3>
    //         {products.map((product, index) => (
    //             <div key={index}>
    //                 <img src={product.photo} alt={product.productName} />
    //                     <h3>{product.productName}</h3>
    //                     <p>{product.descriptionShort}</p>
    //                     <p>Preço: R${product.price.toFixed(2)}</p>
    //             </div>
    //         ))}
    //     </section>
    // )
}

export default Shelf01;
