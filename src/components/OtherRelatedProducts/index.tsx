import { TitleRelatedProducts } from "../TitleRelatedProducts";
import { ListProductsSecond } from "../ListProductsSecond";
import { Container } from "./style";

const OtherRelatedProducts = () => {
  return (
    <Container>
      <div>
        <TitleRelatedProducts />
        <p>Ver todos</p>
      </div>

      <ListProductsSecond />
    </Container>
  );
};

export { OtherRelatedProducts };
