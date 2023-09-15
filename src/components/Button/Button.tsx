import styles from "./Button.module.scss";

interface ButtonProps {
  textButton?: string;
  showButton?: boolean;
}

export function Button({ textButton, showButton }: ButtonProps) {
  return showButton ? (
    <button className={styles.button}>{textButton}</button>
  ) : null;
}
