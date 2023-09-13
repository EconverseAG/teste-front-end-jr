import styles from "./Header.module.scss";
import Range from "../components/Range/Range";
import BarNav from "../components/Bar/BarNav";
import BarVtex from "../components/Bar/BarVtex";

export default function Header() {
  return (
    <header className={styles.header}>
      <Range />
      <BarVtex />
      <BarNav />
    </header>
  );
}
