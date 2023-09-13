import styles from "./Input.module.scss";

interface InputProps {
  type: string;
  placeholder: string;
  id: string;
  name: string;
  label?: string;
  required?: boolean;
}

export function Input({
  type,
  placeholder,
  id,
  name,
  label,
  ...props
}: InputProps) {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        {...props}
      />
    </div>
  );
}
