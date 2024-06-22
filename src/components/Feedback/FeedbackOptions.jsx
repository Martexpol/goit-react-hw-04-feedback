import styles from "./FeedbackOptions.module.scss";
import FeedbackButton from "./FeedbackButton";

export default function FeedbackOptions() {
  const options = ["good", "neutral", "bad"];
  return (
    <div className={styles.btnContainer}>
      {options.map((option) => (
        <FeedbackButton key={option} option={option} />
      ))}
    </div>
  );
}
