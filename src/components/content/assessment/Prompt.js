import React from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import PromptInfo from './PromptInfo';
import PromptString from './PromptString';
import PromptInput from './PromptInput';
import { logData } from '../../../modules/common';
import { nextPractice, setTimerForPrompt } from '../../../modules/assessment';
import { delaySelector } from '../../../modules/data';

const Prompt = (props) => {
  return (
    <div className={`prompt-main ${props.view}`}>
      <PromptInfo view={props.view} score={props.score} />
      <PromptString prompt={props.prompt} view={props.view} score={props.score} />
      <PromptInput prompt={props.prompt}
        lastReintro={props.lastReintro}
        view={props.view}
        logData={props.logData}
        nextPractice={props.nextPractice}
      />
    </div>
  );
};

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
