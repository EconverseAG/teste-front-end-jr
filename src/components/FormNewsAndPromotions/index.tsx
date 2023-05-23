import { Container } from "./style";
import { Button } from "../Button";

const FormNewsAndPromotions = () => {
  return (
    <Container>
      <p>
        Cadastre-se e Receba nossas
        <b>novidades e promoções</b>
      </p>

      <p>
        Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem
        ipsum
      </p>

      <div>
        <input type="email" placeholder="SEU E-MAIL" />
        <Button size="small">OK</Button>
      </div>
    </Container>
  );
};

export { FormNewsAndPromotions };
