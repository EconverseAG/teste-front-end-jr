import { ListProducts } from "../ListProducts";
import { NavProducts } from "../NavProducts";
import { Container } from "./style";

const RelatedProducts = () => {
  return (
    <Container id="products">
      <NavProducts />
      <ListProducts />
    </Container>
  );
};

export { RelatedProducts };
