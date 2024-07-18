import { clsx } from "clsx";
import { useId, type TextareaHTMLAttributes } from "react";
import styles from "./TextArea.module.scss";

interface TextInputProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
  label: string;
}

export default function TextArea({
  label,
  className,
  ...props
}: TextInputProps) {
  const id = useId();

  return (
    <div className={styles["text-area"]}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles["input-wrapper"]}>
        <textarea
          id={id}
          className={clsx(styles.input, className)}
          {...props}
        />
      </div>
    </div>
  );
}
