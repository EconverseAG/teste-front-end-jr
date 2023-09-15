import styles from "./Button.module.scss";

interface ButtonProps {
  children: string;
  padding: string;
  borderRadius: string;
  fontSize: string;
  fontWeight?: string;
  marginTop?: string;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={styles.button} style={{ ...props }}>
      {children}
    </button>
  );
}
