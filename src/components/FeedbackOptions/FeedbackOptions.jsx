const Controls = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => (
  <div className="container-button">
    <button type="button" className="button" onClick={onIncrementGood}>
      Good
    </button>
    <button type="button" className="button" onClick={onIncrementNeutral}>
      Neutral
    </button>
    <button type="button" className="button" onClick={onIncrementBad}>
      Bad
    </button>
  </div>
);

export default Controls;
