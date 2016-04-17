import React from 'react';

export default class PromptInput extends React.Component {
  // Compare prompt and response to derive score
  static recordScore(prompt, responseStr) {
    const res = responseStr.toUpperCase().split('');
    // eslint-disable-next-line prefer-const
    let score = prompt.split('').slice();
    res.forEach((char, i) => {
      if (char === score[i]) {
        score[i] = 2;
      } else if (score.indexOf(char) !== -1) {
        score[score.indexOf(char)] = 1;
      }
    });

    return score.map((char) => {
      return (typeof char === 'string') ? 0 : char;
    });
  }

  // Derive k value from score array and last reintroduction time
  static deriveK(scoreArr) {
    let score = scoreArr.reduce((sum, char) => sum + char / (scoreArr.length * 2), 0);
    if (score === 1) {
      score = (scoreArr.length * 2 - 1) / (scoreArr.length * 2);
    } else if (score === 0) {
      score = 1 / (scoreArr.length * 2);
    }
    return Math.abs(Math.log(score) / (Date.now() - this.lastReintro));
  }

  constructor(props) {
    super(props);
    this.validateInput = this.validateInput.bind(this);
    this.getData = this.getData.bind(this);
  }

  // Clear input field on view transitions
  componentDidUpdate(prevProps) {
    this.input.value = (this.props.view !== prevProps.view) ? '' : this.input.value;
  }

  // Return score and k value as an array
  getData() {
    const score = this.recordScore(this.props.prompt, this.input.value);
    return [score, this.deriveK(score)];
  }

  validateInput() {
    switch (this.props.view) {
      case 'practice':
      case 'practice2':
        if (this.input.value.toUpperCase() === this.props.prompt) {
          this.props.nextPractice(this.props.view);
        } else {
          this.err.textContent = 'One or more characters are incorrect';
        }
        break;
      case 'prompt':
        if (this.input.value < this.props.prompt.length) {
          this.err.textContent = `Input must be ${this.props.prompt.length} characters long.`;
        } else {
          this.props.logData.apply(null, this.getData());
        }
        break;
      case 'score':
        this.props.nextPractice(this.props.view);
        break;
      default:
    }
  }

  render() {
    return (
      <div className="prompt-input">
        <input
          ref={(e) => { this.input = e; }}
          type="text"
          maxLength={this.props.prompt.length}
        />
        <button onClick={this.validateInput}>Submit</button>
        <div ref={(e) => { this.err = e; }} className="prompt-error" />
      </div>
    );
  }
}

PromptInput.propTypes = {
  prompt: React.PropTypes.string.isRequired,
  lastReintro: React.PropTypes.number,
  view: React.PropTypes.string.isRequired,
  logData: React.PropTypes.func.isRequired,
  nextPractice: React.PropTypes.func.isRequired,
};
