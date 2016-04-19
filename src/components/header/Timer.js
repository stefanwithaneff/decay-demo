import React from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import { setTimerForPrompt } from '../../modules/assessment';
import { delaySelector } from '../../modules/data';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.changeTime = this.changeTime.bind(this);
  }

  componentDidMount() {
    // Set timer if app is reloaded in waiting view
    if (this.props.view === 'wait') {
      this.cancelTimer = this.props.setTimer(this.props.delay -
        (Date.now() - this.props.lastReintro) / 1000);
    }

    // Initialize timer render loop
    requestAnimationFrame(this.changeTime);
  }

  componentWillReceiveProps(nextProps) {
    // Cancels prompt timer if new prompt is generated
    if (this.cancelTimer && this.props.prompt !== nextProps.prompt) {
      this.cancelTimer();
    }

    // Set timer when app transitions to the waiting view
    if (this.props.view !== 'wait' && nextProps.view === 'wait') {
      this.cancelTimer = this.props.setTimer(this.props.delay);
    }
  }

  // Uses ref to display derived 'Time Remaining' state
  changeTime() {
    this.timer.textContent = (this.props.view === 'wait') ?
      this.timeToText(this.props.delay, this.props.lastReintro) :
      '00:00:00';

    requestAnimationFrame(this.changeTime);
  }

  // Returns time left as text to be displayed
  timeToText(delay, lastReintro) {
    if (lastReintro === null) return '00:00:00';

    // Calculate time left in seconds
    const now = Date.now();
    const timePassedMS = now - lastReintro;
    let timeLeftS = delay - Math.floor(timePassedMS / 1000);
    timeLeftS = (timeLeftS <= 0) ? 0 : timeLeftS;

    // Return simplified display if time left is too long
    const daysLeft = Math.floor(timeLeftS / 86400);
    if (daysLeft > 1) return `${daysLeft} days`;

    const hoursLeft = Math.floor(timeLeftS / 3600);
    const minsLeft = Math.floor((timeLeftS % 3600) / 60);
    const secsLeft = (timeLeftS % 3600) % 60;

    /* eslint-disable prefer-template */
    return ((hoursLeft < 10) ? `0${hoursLeft}` : hoursLeft) + ':' +
      ((minsLeft < 10) ? `0${minsLeft}` : minsLeft) + ':' +
      ((secsLeft < 10) ? `0${secsLeft}` : secsLeft);
    /* eslint-enable */
  }

  render() {
    return (
      <div className="timer" ref={(e) => { this.timer = e; }}>
        {
          this.props.view === 'wait' ?
            this.timeToText(this.props.delay, this.props.lastReintro) :
            '00:00:00'
        }
      </div>
    );
  }
}

Timer.propTypes = {
  delay: React.PropTypes.number.isRequired,
  lastReintro: React.PropTypes.number,
  view: React.PropTypes.string.isRequired,
  prompt: React.PropTypes.string.isRequired,
  setTimer: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    delay: delaySelector(state),
    lastReintro: state.get('assessment').get('lastReintroduced'),
    view: state.get('assessment').get('view'),
    prompt: state.get('assessment').get('prompt'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTimer: Redux.bindActionCreators(setTimerForPrompt, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
