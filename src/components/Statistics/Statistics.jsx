import React from 'react';
import Controls from '../FeedbackOptions/FeedbackOptions';
// import './Statistics.scss';

class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  hendleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  hendleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <section className="statistics">
        <h1 className="statistics-title">Please leave feedback</h1>
        <Controls
          onIncrementGood={this.hendleIncrementGood}
          onIncrementNeutral={this.hendleIncrementNeutral}
          onIncrementBad={this.hendleIncrementBad}
        />
        <div className="container-status">
          <h2 className="status-title">Statistics</h2>
          <span className="status-response">Good:{this.state.good}</span>
          <span className="status-response">Neutral:{this.state.neutral}</span>
          <span className="status-response">Bad:{this.state.bad}</span>
          <span className="status-response">Total:0</span>
          <span className="status-response">Positive feedback:0%</span>
          <p className="status-p">No feedback given</p>
        </div>
      </section>
    );
  }
}

export default Statistics;
