import styles from "./CategoriasData.module.scss";

interface CategoriasDataProps {
  title?: string;
  img: string;
  active?: boolean;
}

export default function CategoriasData({ ...props }: CategoriasDataProps) {
  return (
    <div
      className={`${styles.categoriasData} ${
        props.active ? styles.active : ""
      }`}
    >
      {props.img && (
        <div className={styles.container}>
          <img src={props.img} alt={props.title} />
        </div>
      )}

      {props.title && <h2>{props.title}</h2>}
    </div>
  );
}
