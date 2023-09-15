import styles from "./Main.module.scss";
import Banner from "../components/Banner/Banner";

export default function Main() {
  return (
    <main className={styles.main}>
      <Banner/>
    </main>
  );
}