import React from 'react';

export default class HistoryNav extends React.Component {
  constructor(props) {
    super(props);
    this.navIndex = this.navIndex.bind(this);
  }

  navIndex(loc) {
    if (this.props.scores.size === 0) return;
    switch (loc) {
      case 'left':
        if (this.props.index <= 0) return;
        this.props.changeIndex(this.props.index - 1);
        break;
      case 'history':
        this.props.changeIndex(this.props.scores.size - 1);
        break;
      case 'agg':
        this.props.changeIndex(-1);
        break;
      case 'right':
        if (this.props.index < this.props.scores.size - 1 && this.props.index >= 0) {
          this.props.changeIndex(this.props.index + 1);
        }
        break;
      default:
    }
  }

  render() {
    return (
      <div className="history-nav">
        <button className="nav-left" onClick={() => this.navIndex('left')}>
          &#9668;
        </button>
        <button className={(this.props.index < 0) ? 'nav-history' : 'nav-history selected'}
          onClick={() => this.navIndex('history')}
        >
          Score History
        </button>
        <button className={(this.props.index < 0) ? 'nav-agg selected' : 'nav-agg'}
          onClick={() => this.navIndex('agg')}
        >
          Aggregate Score
        </button>
        <button className="nav-right" onClick={() => this.navIndex('right')}>
          &#9658;
        </button>
      </div>
    );
  }
}

HistoryNav.propTypes = {
  index: React.PropTypes.number.isRequired,
  scores: React.PropTypes.object,
  changeIndex: React.PropTypes.func.isRequired,
};
