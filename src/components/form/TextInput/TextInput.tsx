import { clsx } from "clsx";
import { useId, type InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./TextInput.module.scss";

interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "name"> {
  label: string;
  name: string; // This is required for react-hook-form
}

export default function TextInput({
  label,
  name,
  className,
  ...props
}: TextInputProps) {
  const id = useId();

  const methods = useFormContext();
  if (!methods) throw new Error("TextArea must be used within FormWrapper");

  const {
    register,
    formState: { errors },
  } = methods;
  const error = errors?.[name]?.message;

  return (
    <div className={styles["text-input"]}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles["input-wrapper"]}>
        <input
          {...register(name)}
          id={id}
          className={clsx(styles.input, className)}
          aria-invalid={!!error}
          {...props}
        />
      </div>
      {error && <span className={styles["error-message"]}>{`${error}`}</span>}
    </div>
  );
}
