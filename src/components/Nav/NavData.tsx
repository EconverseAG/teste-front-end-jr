import styles from "./NavData.module.scss";

export interface NavDataProps {
  title: string;
  href: string;
  active?: boolean;
}

export default function NavData(props: { titles: NavDataProps[] }) {
  return (
    <nav className={styles.navData}>
      <ul className={styles.ul}>
        {props.titles.map((item, index) => (
          <li
            key={index}
            className={`${styles.li} ${item.active ? styles.active : ""}`}
          >
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
