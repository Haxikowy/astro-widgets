import Button from "@/components/Button";
import FormWrapper from "@/components/form/FormWrapper";
import TextArea from "@/components/form/TextArea";
import TextInput from "@/components/form/TextInput";
import { ApiClient } from "@/service";
import type { ContactWidget } from "@/service/models.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./ContactWidget_r.module.scss";

const requiredString = z.string().min(1, { message: "Required" });

const schema = z.object({
  name: requiredString,
  email: requiredString.email({ message: "Invalid email" }),
  message: requiredString,
});

type ContactFormData = z.infer<typeof schema>;

export default function ContactWidget_r(_: ContactWidget) {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const response = await ApiClient.postContact(data);

    console.log(response);
    if (response.status === "success") {
      console.log("Success!");
    } else {
      console.error("Failed to submit contact form.", response.message);
    }
  };

  return (
    <section className={styles["contact-widget"]}>
      <h2 className={styles.title}>Contact us!</h2>
      <FormWrapper className={styles.form} form={form} onSubmit={onSubmit}>
        <TextInput label="Name" name="name" />
        <TextInput label="E-mail" name="email" />
        <TextArea label="Message" name="message" />
        <Button type="submit">Submit</Button>
      </FormWrapper>
    </section>
  );
}
