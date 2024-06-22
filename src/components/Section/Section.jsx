import styles from "./Section.module.scss";
import PropTypes from "prop-types";

export default function Section({ title, children }) {
  return (
    <section>
      <h2 className={styles.header}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = { title: PropTypes.string, children: PropTypes.node };
