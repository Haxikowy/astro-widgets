import { clsx } from "clsx";
import { useId, type InputHTMLAttributes } from "react";
import styles from "./TextInput.module.scss";

interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label: string;
}

export default function TextInput({
  label,
  className,
  ...props
}: TextInputProps) {
  const id = useId();

  return (
    <div className={styles["text-input"]}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles["input-wrapper"]}>
        <input id={id} className={clsx(styles.input, className)} {...props} />
      </div>
    </div>
  );
}
