import styles from "./CategoriasData.module.scss";

interface CategoriasDataProps {
  title?: string;
  img: string;
  active?: boolean;
}

export default function CategoriasData({ ...props }: CategoriasDataProps) {
  return (
    <ul
      className={`${styles.categoriasData} ${
        props.active ? styles.active : ""
      }`}
    >
      <li>
        {props.img && (
          <button className={styles.container}>
            <img src={props.img} alt={props.title} />
          </button>
        )}

        {props.title && <h2>{props.title}</h2>}
      </li>
    </ul>
  );
}
