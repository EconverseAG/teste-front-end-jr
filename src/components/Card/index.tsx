import shop from "../../assets/image 45.svg";
import { Container } from "./style";
import { Button } from "../Button";

const Card = () => {
  return (
    <Container>
      <img src={shop} alt="loja" />

      <div>
        <h2>Produtos</h2>

        <h3>Lorem ipsum dolor sit amet, consectetur</h3>

        <Button size="medium">Confira</Button>
      </div>
    </Container>
  );
};

export { Card };
