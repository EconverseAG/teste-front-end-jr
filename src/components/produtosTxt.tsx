import React from 'react';
import '../styles/styles.scss';

const ProdutosTxt: React.FC = () => {
    return (
        <section className="related-products">
        <h2 className="related-products-title">Produtos relacionados</h2>
        <a href="#" className="view-all">Ver todos</a>
      </section>
    );
};

export default ProdutosTxt;