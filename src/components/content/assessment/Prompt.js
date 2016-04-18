import React from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import PromptInfo from './PromptInfo';
import PromptString from './PromptString';
import PromptInput from './PromptInput';
import { logData } from '../../../modules/common';
import { nextPractice, setTimerForPrompt } from '../../../modules/assessment';
import { delaySelector } from '../../../modules/data';

class Prompt extends React.Component {
  componentDidUpdate(prevProps) {
    // Set timer for next view transition if waiting
    if (this.props.view === 'wait' && prevProps.view !== 'wait') {
      this.props.setTimerForPrompt(this.props.delay);
    }
  }

  render() {
    return (
      <div className={`prompt-main ${this.props.view}`}>
        <PromptInfo view={this.props.view} score={this.props.score} />
        <PromptString prompt={this.props.prompt} view={this.props.view} score={this.props.score} />
        <PromptInput prompt={this.props.prompt}
          lastReintro={this.props.lastReintro}
          view={this.props.view}
          logData={this.props.logData}
          nextPractice={this.props.nextPractice}
        />
      </div>
    );
  }
}

Prompt.propTypes = {
  prompt: React.PropTypes.string.isRequired,
  lastReintro: React.PropTypes.number,
  view: React.PropTypes.string.isRequired,
  score: React.PropTypes.array,
  delay: React.PropTypes.number.isRequired,
  logData: React.PropTypes.func.isRequired,
  nextPractice: React.PropTypes.func.isRequired,
  setTimerForPrompt: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  prompt: state.get('assessment').get('prompt'),
  lastReintro: state.get('assessment').get('lastReintroduced'),
  view: state.get('assessment').get('view'),
  score: state.get('history').get('scores').last(),
  delay: delaySelector(state),
});

const mapDispatchToProps = (dispatch) => {
  return Redux.bindActionCreators({ logData, nextPractice, setTimerForPrompt }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Prompt);
