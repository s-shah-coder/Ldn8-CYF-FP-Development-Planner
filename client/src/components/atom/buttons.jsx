import Button from "react-bootstrap/Button";

import styles from "../../styles/components/atom/buttons.module.css";

export const buttons = (variant, text, href) => (
  <Button href={href} className={styles.btn} variant={variant}>
    {text}
  </Button>
);
