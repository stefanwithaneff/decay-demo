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
  static deriveK(scoreArr, lastReintro) {
    let score = scoreArr.reduce((sum, char) => sum + char / (scoreArr.length * 2), 0);
    if (score === 1) {
      score = (scoreArr.length * 2 - 1) / (scoreArr.length * 2);
    } else if (score === 0) {
      score = 1 / (scoreArr.length * 2);
    }
    return Math.abs(Math.log(score) / ((Date.now() - lastReintro) / 1000));
  }

  constructor(props) {
    super(props);
    this.validateInput = this.validateInput.bind(this);
    this.getData = this.getData.bind(this);
    this.submitInput = this.submitInput.bind(this);
    this.autoFill = this.autoFill.bind(this);
  }

  // Clear input field on view transitions
  // Empty autofill field if prompt changes
  componentDidUpdate(prevProps) {
    this.input.value = (this.props.view !== prevProps.view) ? '' : this.input.value;
    if (prevProps.prompt !== this.props.prompt && prevProps.prompt !== 'practice') {
      this.fakeInput.value = '';
    }
  }

  // Return score and k value as an array
  getData() {
    const score = PromptInput.recordScore(this.props.prompt, this.input.value);
    return [score, PromptInput.deriveK(score, this.props.lastReintro)];
  }

  // Submits input value when the Enter key is hit
  submitInput(event) {
    if (event.keyCode === 13) {
      this.validateInput();
    }
  }

  autoFill() {
    if (this.props.view === 'prompt') return;
    this.fakeInput.value = this.props.prompt.split('').map((char, i) => {
      if (i < this.input.value.length) return ' ';
      return char;
    }).join('');
  }

  // Validates input and dispatches actions
  validateInput() {
    this.err.textContent = '';
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
        <input className="real"
          ref={(e) => { this.input = e; }}
          type="text"
          maxLength={this.props.prompt.length}
          autoComplete="off"
          onKeyDown={this.submitInput}
          onChange={this.autoFill}
          onFocus={this.autoFill}
        />
        <button className="real" onClick={this.validateInput}>Submit</button>
        <div ref={(e) => { this.err = e; }} className="prompt-error" />
        <div className="prompt-input fake">
          <input ref={(e) => { this.fakeInput = e; }} readOnly />
          <button disabled>Submit</button>
        </div>
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
