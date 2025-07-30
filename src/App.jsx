import { useState, useEffect } from "react";
import Options from "./components/Options";
import Feedback from "./components/Feedback";
import Notification from "./components/Notification";

const LOCAL_KEY = "feedback-data";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetFeedback = () => {
    const cleared = { good: 0, neutral: 0, bad: 0 };
    setFeedback(cleared);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(cleared));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage =
    totalFeedback > 0
      ? Math.round((feedback.good / totalFeedback) * 100)
      : 0;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>

      <Options
        options={Object.keys(feedback)}
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        showReset={totalFeedback > 0}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}

export default App;
