import { ProductContext } from "../../contexts/ProductContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { IProduct } from "../../interfaces";
import React, { useContext } from "react";
import { Container } from "./style";
import x from "../../assets/x.svg";

const ModalDetailsProduct = () => {
  const productName = sessionStorage.getItem("VTEX: name");

  const { products, setOpenModal } = useContext(ProductContext);

  const product = products.find(
    (product: IProduct) => product.productName === productName
  );

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title={`${product?.productName} | VTEX`} />
      </HelmetProvider>
      <Container>
        <img src={x} alt="x" onClick={() => setOpenModal(false)} />

        <div>
          <img src={product?.photo} alt={product?.productName} />

          <div>
            <h2>{product?.productName}</h2>

            <span>R$ {product?.price.toFixed(2).replace(".", ",")}</span>

            <p>{product?.descriptionShort}</p>

            <a>Veja mais detalhes do produto {">"}</a>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export { ModalDetailsProduct };
