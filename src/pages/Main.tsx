import styles from "./Main.module.scss";
import Banner from "../components/Banner/Banner";
import Categorias from "../components/Categorias/Categorias";

export default function Main() {
  return (
    <main className={styles.main}>
      <Banner/>
      <Categorias />
    </main>
  );
}