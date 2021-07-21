import './FeedbackOptions.scss';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            type="button"
            key={option}
            name={option}
            onClick={onLeaveFeedback}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;
