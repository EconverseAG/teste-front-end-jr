import React from "react";
import "../styles/styles.scss";
import logo from "../imgs/logo-vtex/logo-vtex.png";
// import'';

const Marcas: React.FC = () => {
  return (
    <section className="marcas">
      <div className="container">
        <h1>Navegue por marcas</h1>
        <ul className="logo-marcas">
          <li className="marca">
            <img src={logo} alt="" />
          </li>
          <li className="marca">
            <img src={logo} alt="" />
          </li>
          <li className="marca">
            <img src={logo} alt="" />
          </li>
          <li className="marca">
            <img src={logo} alt="" />
          </li>
          <li className="marca">
            <img src={logo} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Marcas;