import React from 'react';
import '../styles/styles.scss'
import iconeMonitor from '../imgs/categorias/monitorar-tablet-e-smartohone.png';
import iconeMercado from '../imgs/categorias/supermercados.png';
import iconeFerramentes from '../imgs/categorias/ferramentas.png';
import iconeModa from '../imgs/categorias/moda.png';
import iconeSaude from '../imgs/categorias/cuidados-de-saude.png';
import iconeCorrida from '../imgs/categorias/corrida.png';
import iconeBebida from '../imgs/categorias/whiskey.png';

const Categories: React.FC = () => {
  return (
    <section className="categories">
      <ul className="category-list">
        <li className="category-item active">
        <div className="icon-container">
              <img src={iconeMonitor} alt="Tecnologia" />
            </div>
          <a href="#">
            <span className="category-label">Tecnologia</span>
          </a>
        </li>
        <li className="category-item">
        <div className="icon-container">
            <img src={iconeMercado} alt="Tecnologia" />
            </div>
          <a href="#">
            <span className="category-label">Supermercado</span>
          </a>
        </li>
        <li className="category-item">
        <div className="icon-container">
            <img src={iconeBebida} alt="Tecnologia" />
            </div>
          <a href="#">
            <span className="category-label">Bebidas</span>
          </a>
        </li>
        <li className="category-item">
            <div className="icon-container">
            <img src={iconeFerramentes} alt="Tecnologia" />
            </div>
          <a href="#">
            <span className="category-label">Ferramentas</span>
          </a>
        </li>
        <li className="category-item">
            <div className="icon-container">
            <img src={iconeSaude} alt="Tecnologia" />
            </div>
          <a href="#">
            <span className="category-label">Saúde</span>
          </a>
        </li>
        <li className="category-item">
            <div className="icon-container">
            <img src={iconeCorrida} alt="Tecnologia" />
            </div>
          <a href="#">
            <span className="category-label">Esportes e Fitness</span>
          </a>
        </li>
        <li className="category-item">
            <div className="icon-container">
            <img src={iconeModa} alt="Tecnologia" />
            </div>
          <a href="#">
            <span className="category-label">Moda</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Categories;
