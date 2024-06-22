import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import FormContextProvider from "./components/FormContextProvider/FormContextProvider.jsx";

const initialData = {
  good: 0,
  neutral: 0,
  bad: 0,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <FormContextProvider initialValue={initialData}>
    <App />
  </FormContextProvider>,
);
