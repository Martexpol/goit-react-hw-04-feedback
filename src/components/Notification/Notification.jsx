import styles from "./Notification.module.scss";
import PropTypes from "prop-types";

export default function Notification({ message }) {
  return (
    <div className={styles.results}>
      <p>{message}</p>
    </div>
  );
}

Notification.propTypes = { message: PropTypes.string.isRequired };
