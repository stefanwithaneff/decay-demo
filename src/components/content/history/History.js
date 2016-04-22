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
        <HistoryVis index={props.index}
          scores={props.scores}
          scoreAgg={props.scoreAgg}
          prompt={props.prompt}
        />
      </div>
    </div>
  );
};

History.propTypes = {
  index: React.PropTypes.number.isRequired,
  scores: React.PropTypes.object.isRequired,
  scoreAgg: React.PropTypes.array,
  prompt: React.PropTypes.string.isRequired,
  changeIndex: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
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
