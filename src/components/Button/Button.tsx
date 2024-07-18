import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      <span className={styles.text}>{children}</span>
    </button>
  );
}
