import styles from "../../styles/components/atom/title.module.css";
import media from "../../styles/components/atom/titleMedia.module.css";

export const title = (string) => (
  <h1 className={`${styles.header} ${media.header}`}>{string}</h1>
);
