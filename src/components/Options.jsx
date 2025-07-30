function Options({ options, onLeaveFeedback , onReset, showReset}) {
  return (
    <div
    style={{
        display: 'flex',
        gap: '5px', // butonlar arasında eşit boşluk
      }}
    >
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          style={{
            borderRadius: '3px',
            border: '1px solid #000',
            padding: '5px 10px',
            textTransform: 'capitalize', // good → Good
          }}
        >
          {option}
        </button>
      ))}

      {showReset && (
        <button
          onClick={onReset}
          style={{
            borderRadius: '3px',
            border: '1px solid #000',
            padding: '5px 10px',
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;