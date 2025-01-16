import React from 'react';
import '../styles/styles.scss';
import img_fundo from '../imgs/fundo/produtos.png';

const ProductList: React.FC = () => {
  return (
    <section className="product-list">
      <div className="container-product">
        <div className="product-card">
          <img src={img_fundo} alt="Parceiro 2" className="product-image"></img>
          <div className="product-info">
            <h2 className="product-title">Produtos</h2>
            <p className="product-description">Lorem ipsum dolor sit amet, consectetur.</p>
            <a href="#" className="btn">Confira</a>
          </div>
        </div>
        <div className="product-card">
          <img src={img_fundo} alt="Parceiro 2" className="product-image"></img>
          <div className="product-info">
            <h2 className="product-title">Produtos</h2>
            <p className="product-description">Lorem ipsum dolor sit amet, consectetur.</p>
            <a href="#" className="btn">Confira</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
