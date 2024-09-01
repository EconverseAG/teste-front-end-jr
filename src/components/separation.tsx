import React from 'react';
import '../styles/styles.scss';

const Sepatarion: React.FC = () => {
    return (
        <section className="related-products">
            <div className="container">
                <div className="linha"></div>
                <div className="text">
                    <h2 className="related-products-title">Produtos relacionados</h2>
                    <a href="#" className="view-all">Ver todos</a>
                </div>
                <div className="linha"></div>
            </div>

        </section>
    )
}

export default Sepatarion;