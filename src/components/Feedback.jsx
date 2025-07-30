function Feedback({ feedback, total, positivePercentage }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positivePercentage}%</li>
      </ul>
    </div>
  );
}

export default Feedback;