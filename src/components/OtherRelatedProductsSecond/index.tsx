import { TitleRelatedProducts } from "../TitleRelatedProducts";
import { Container } from "../OtherRelatedProducts/style";
import { ListProductsThird } from "../ListProductsThird";

const OtherRelatedProductsSecond = () => {
  return (
    <Container>
      <div>
        <TitleRelatedProducts />
        <p>Ver todos</p>
      </div>

      <ListProductsThird />
    </Container>
  );
};

export { OtherRelatedProductsSecond };
