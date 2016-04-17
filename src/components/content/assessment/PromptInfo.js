import React from 'react';

export default class PromptInfo extends React.Component {
  calcScore(scoreArray) {
    return Math.ceil(scoreArray.reduce((score, charScore) => {
      return score + charScore / (scoreArray.length * 2);
    }, 0) * 100);
  }

  render() {
    switch (this.props.view) {
      case 'practice':
        return (
          <h1 className="prompt-info">
            Input the given series of characters (case does not matter) and press Submit.
          </h1>
        );
      case 'practice2':
        return (
          <h1 className="prompt-info">
            Please re-type the given series of characters and press Submit.
          </h1>
        );
      case 'wait':
        return (
          <h1 className="prompt-info">
            Please wait for the next recall attempt...
          </h1>
        );
      case 'prompt':
        return (
          <h1 className="prompt-info">
            Enter the series of characters from memory.
            Partial credit is given for including a correct character in the incorrect order.
          </h1>
        );
      case 'score':
        return (
          <h1 className="prompt-info">
            { `Your score is ${this.calcScore(this.props.score)}%. Press Submit to continue.` }
          </h1>
        );
      default:
    }
    return (
      <h1 className="prompt-info">
        Input the given series of characters (case does not matter) and press Submit.
      </h1>
    );
  }
}

PromptInfo.propTypes = {
  view: React.PropTypes.string.isRequired,
  score: React.PropTypes.array,
};

export default PromptInfo;
