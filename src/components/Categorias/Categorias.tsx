import CategoriaData from "./CategoriasData";
import styles from "./Categorias.module.scss";
import tecnologia from "../../assets/img/tecnologia.png";
import supermercado from "../../assets/img/supermercado.png";
import bebida from "../../assets/img/bebida.png";
import ferramenta from "../../assets/img/ferramenta.png";
import saude from "../../assets/img/saude.png";
import corrida from "../../assets/img/corrida.png";
import moda from "../../assets/img/moda.png";
import mercado from "../../assets/img/mercado.png";
import padaria from "../../assets/img/padaria.png";
import oriental from "../../assets/img/oriental.png";

export default function Categorias() {
  return (
    <section className={styles.categorias}>
      <CategoriaData img={tecnologia} title="Tecnologia" active={true} />
      <CategoriaData img={supermercado} title="Supermercado" />
      <CategoriaData img={bebida} title="Bebidas" />
      <CategoriaData img={ferramenta} title="Ferramentas" />
      <CategoriaData img={saude} title="Saúde" />
      <CategoriaData img={corrida} title="Esportes e Fitness" />
      <CategoriaData img={moda} title="Moda" />
      <CategoriaData img={mercado} title="Mercado" />
      <CategoriaData img={padaria} title="Padaria" />
      <CategoriaData img={oriental} title="Oriental" />
    </section>
  );
}
