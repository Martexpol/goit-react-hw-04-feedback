import React from "react";
import styles from "./App.module.scss";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import { useFormContext } from "./FormContextProvider/FormContextProvider";

function App() {
  const { feedback } = useFormContext();
  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total
    ? Math.round((feedback.good / total) * 100)
    : 0;

  return (
    <div className={styles.main}>
      <h1 className={styles.mainHeader}>React Homework 4 - Feedback</h1>

      <div className={styles.feedbackContainer}>
        <Section title="Please leave feedback">
          <FeedbackOptions />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    </div>
  );
}

export default App;
