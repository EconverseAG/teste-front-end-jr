import React from 'react'
import '../styles/styles.scss'

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="letras">
          <h1 className="textPromo">Venha conhecer nossas promoções</h1>
          <p className="textDesconto">50% Off nos produtos</p>
          <a href="#" className="btn-promo">Ver produto</a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
