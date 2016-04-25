import React from 'react';
import { recordScore, deriveK } from '../../../modules/common';

export default class PromptInput extends React.Component {

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
    } else {
      this.autoFill();
    }
  }

  // Return score and k value as an array
  getData() {
    const score = recordScore(this.props.prompt, this.input.value);
    return [score, deriveK(score, this.props.lastReintro)];
  }

  // Submits input value when the Enter key is hit
  submitInput(event) {
    if (event.keyCode === 13) {
      this.validateInput();
    }
  }

  // Fills input with prompt hinting
  autoFill() {
    if (this.props.view === 'prompt' || this.props.view === 'score') {
      this.fakeInput.value = '';
      if (this.props.view === 'score') {
        this.input.value = '';
      }
      return;
    }
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
          disabled={this.props.view === 'wait'}
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
