import styles from "./Header.module.scss";
import Range from "../Range/Range";
import BarNav from "../Bar/BarNav";
import BarVtex from "../Bar/BarVtex";

export default function Header() {
  return (
    <header className={styles.header}>
      <Range />
      <BarVtex />
      <BarNav />
    </header>
  );
}
