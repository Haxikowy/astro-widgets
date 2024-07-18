import type { FormHTMLAttributes, ReactNode } from "react";
import {
  type FieldValues,
  type UseFormReturn,
  FormProvider,
  type SubmitHandler,
} from "react-hook-form";

interface FormWrapperProps<T extends FieldValues>
  extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit" | "children"> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
}

export default function FormWrapper<T extends FieldValues>({
  children,
  form,
  onSubmit,
  ...props
}: FormWrapperProps<T>) {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
}
