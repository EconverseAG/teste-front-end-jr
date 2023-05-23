import technology from "../../assets/monitorar-tablet-e-smartohone 1.svg";
import supermarket from "../../assets/supermercados 1.svg";
import health from "../../assets/cuidados-de-saude 1.svg";
import tools from "../../assets/ferramentas 1.svg";
import fitness from "../../assets/corrida 1.svg";
import drinks from "../../assets/whiskey.svg";
import fashion from "../../assets/moda 1.svg";
import { Category } from "../Category";
import { Container } from "./style";

const Categories = () => {
  return (
    <Container>
      <Category src={technology} alt="tecnologia" title="Tecnologia" />
      <Category src={supermarket} alt="supermercado" title="Supermercado" />
      <Category src={drinks} alt="bebidas" title="Bebidas" />
      <Category src={tools} alt="ferramentas" title="Ferramentas" />
      <Category src={health} alt="saúde" title="Saúde" />
      <Category
        src={fitness}
        alt="esportes e fitness"
        title="Esporte e Fitness"
      />
      <Category src={fashion} alt="moda" title="Moda" />
    </Container>
  );
};

export { Categories };
