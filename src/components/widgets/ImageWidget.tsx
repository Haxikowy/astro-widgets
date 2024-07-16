import type { ImageWidget } from "../../service/models";
import styles from "./ImageWidget.module.css";

export default function ImageWidget({ image }: ImageWidget) {
  return (
    <section className={styles["image-widget"]}>
      <picture className={styles.picture}>
        <img className={styles.image} src={image.url} alt={image.alt} />
      </picture>
    </section>
  );
}
