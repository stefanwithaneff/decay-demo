import React from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import { changeIndex, aggregateSelector } from '../../../modules/history';
import HistoryNav from './HistoryNav';
import HistoryVis from './HistoryVis';

const History = (props) => {
  return (
    <div className="content history">
      <div className="prompt-main">
        <HistoryNav index={props.index}
          scores={props.scores}
          changeIndex={props.changeIndex}
        />
        <HistoryVis view={props.view}
          index={props.index}
          scores={props.scores}
          scoreAgg={props.scoreAgg}
          prompt={props.prompt}
        />
        {(props.index >= 0) ?
            <div className="history-page">
              {`Recall Attempt ${props.index + 1}/${props.scores.size}`}
            </div>
            :
            <div className="history-legend">
              <div className="legend-info">Per Letter Accuracy</div>
              <div className="legend-bar" />
              <span className="legend-label zero">0%</span>
              <span className="legend-label fifty">50%</span>
              <span className="legend-label hundred">100%</span>
            </div>
        }
      </div>
    </div>
  );
};

History.propTypes = {
  view: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  scores: React.PropTypes.object.isRequired,
  scoreAgg: React.PropTypes.array,
  prompt: React.PropTypes.string.isRequired,
  changeIndex: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    view: state.get('assessment').get('view'),
    index: state.get('history').get('index'),
    scores: state.get('history').get('scores'),
    scoreAgg: aggregateSelector(state),
    prompt: state.get('assessment').get('prompt'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeIndex: Redux.bindActionCreators(changeIndex, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
