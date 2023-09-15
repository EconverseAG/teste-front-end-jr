import styles from "./TitleData.module.scss";

interface TitleDataProps {
  title: string;
  titleLink?: string;
  href?: string;
}

export default function TitleData(props: TitleDataProps) {
  return (
    <div className={styles.titleData}>
      <div className={styles.text}>
        <span></span>
        <h1>{props.title}</h1>
        <span></span>
      </div>

      {props.titleLink && (
        <div className={styles.link}>
          <a href={props.href}>{props.titleLink}</a>
        </div>
      )}
    </div>
  );
}
