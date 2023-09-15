import styles from "./Main.module.scss";
import Banner from "../Banner/Banner";
import Categorias from "../Categorias/Categorias";
import ProdutosRelacionados1 from "../Produtos/ProdutosRelacionados1";


export default function Main() {
  return (
    <main className={styles.main}>
      <Banner />
      <Categorias />
      <ProdutosRelacionados1 />
    
    </main>
  );
}
