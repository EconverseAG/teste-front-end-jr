import { TitleRelatedProducts } from "../TitleRelatedProducts";
import { Container } from "./style";

const NavProducts = () => {
  return (
    <Container>
      <TitleRelatedProducts />

      <div>
        <p>celular</p>
        <p>acessórios</p>
        <p>tablets</p>
        <p>notebooks</p>
        <p>TVs</p>
        <p>Ver todos</p>
      </div>
    </Container>
  );
};

export { NavProducts };
