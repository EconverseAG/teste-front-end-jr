import { ProductContext } from "../../contexts/ProductContext";
import { IProductComponent } from "../../interfaces";
import { Container } from "./style";
import { Button } from "../Button";
import { useContext } from "react";

const Product = ({ product }: IProductComponent) => {
  const priceOld = product.price + 2;
  const discount = product.price / 2;

  const { setOpenModal } = useContext(ProductContext);

  return (
    <Container>
      <img src={product.photo} alt={product.productName} />

      <div>
        <h3>{product.productName}</h3>

        <div>
          <span>R$ {priceOld.toFixed(2).replace(".", ",")}</span>
          <span>R$ {product.price.toFixed(2).replace(".", ",")}</span>
        </div>

        <div>
          <p>ou 2x de R$ {discount.toFixed(2).replace(".", ",")} sem juros</p>

          <span>Frete grátis</span>
        </div>

        <Button
          size="large"
          onClick={() => {
            setOpenModal(true);

            sessionStorage.setItem("VTEX: name", product.productName);
          }}
        >
          Comprar
        </Button>
      </div>
    </Container>
  );
};

export { Product };
