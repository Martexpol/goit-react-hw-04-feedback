import styles from "./FeedbackOptions.module.scss";
import PropTypes from "prop-types";
import { useFormContext } from "../FormContextProvider/FormContextProvider";

export default function FeedbackButton({ option }) {
  const { feedback, setFeedback } = useFormContext();

  const handleClick = () => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        styles[`btn${option.charAt(0).toUpperCase() + option.slice(1)}`]
      }>
      {option.charAt(0).toUpperCase() + option.slice(1)}
    </button>
  );
}

FeedbackButton.propTypes = {
  option: PropTypes.string,
};
