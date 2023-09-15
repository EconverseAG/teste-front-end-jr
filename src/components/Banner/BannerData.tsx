import { Button } from "../Button/Button";
import styles from "./BannerData.module.scss";

interface BannerDataProps {
  img: string;
  title?: string;
  description?: string;
  textButton?: string;
  showButton?: boolean;
}

export function BannerData({ ...props }: BannerDataProps) {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      {props.title || props.description || props.showButton ? (
        <div className={styles.text}>
          {props.title && <h1>{props.title}</h1>}
          {props.description && <p>{props.description}</p>}
          {props.showButton && (
            <Button
              textButton={props.textButton}
              showButton={props.showButton}
            />
          )}
        </div>
      ) : null}
    </div>
  );
}
