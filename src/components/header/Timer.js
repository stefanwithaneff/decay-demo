import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.changeTime = this.changeTime.bind(this);
  }

  componentDidMount() {
    setInterval(this.changeTime, 1000);
  }

  changeTime() {
    this.timer.textContent = (this.props.view === 'wait') ?
      this.timeToText(this.props.delay, this.props.lastReintro) :
      '00:00:00';
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
};
