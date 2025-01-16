import React from 'react';
import '../styles/styles.scss';
import img_fundo from '../imgs/fundo/parceria.png';

const Partners: React.FC = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="partner-card">
          <img src={img_fundo} alt="Parceiro 2" className="partner-image"></img>
          <div className="partner-info">
            <h2 className="partner-title">Parceiros</h2>
            <p className="partner-description">Lorem ipsum dolor sit amet, consectetur.</p>
            <a href="#" className="btn">Confira</a>
          </div>
        </div>
        <div className="partner-card">
          <img src={img_fundo} alt="Parceiro 2" className="partner-image"></img>
          <div className="partner-info">
            <h2 className="partner-title">Parceiros</h2>
            <p className="partner-description">Lorem ipsum dolor sit amet, consectetur.</p>
            <a href="#" className="btn">Confira</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
