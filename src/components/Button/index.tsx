// Button.tsx
import { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  variant: 'small' | 'medium' | 'large';
};

export function Button({ title, variant, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.container} ${styles[variant]}`} //concatenação das classes
      {...props}
    >
      {title}
    </button>
  );
}