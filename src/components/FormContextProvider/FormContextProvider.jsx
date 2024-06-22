import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const initialData = {
  good: 0,
  neutral: 0,
  bad: 0,
};
const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export default function FormContextProvider({ children, initialValue }) {
  const [feedback, setFeedback] = useState(initialValue);
  const value = {
    feedback,
    setFeedback,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

FormContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialValue: PropTypes.object.isRequired,
};
