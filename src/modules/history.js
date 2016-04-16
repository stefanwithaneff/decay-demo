import { LOG_DATA, NEW_PROMPT } from './common';
import Immutable from 'immutable';
import { createSelector } from 'reselect';

const CHANGE_INDEX = 'CHANGE_INDEX';

/*
 * History Reducer
 *
 * state has the following properties:
 * @scores: Immutable.List of previous assessment results
 * @index: The index of the score being viewed, negative values represent the aggregate view
 *
 */
export default function reducer(state, action) {
  switch (action.type) {
    case NEW_PROMPT:
      return state.withMutations(oldState => {
        oldState
          .set('scores', Immutable.List()) // eslint-disable-line
          .set('index', 0);
      });
    case LOG_DATA:
      return state.update('scores', (scores) => scores.push(action.score));
    case CHANGE_INDEX:
      return state.set('index', action.index);
    default:
      return state;
  }
}

// Action Creator: Changes index for viewable score data
export function changeIndex(index) {
  return {
    type: CHANGE_INDEX,
    index,
  };
}

const scoresSelector = (state) => state.get('history').get('scores');

// Selector: Returns relative frequency of correct answers for each character in the prompt
export const aggregateSelector = createSelector(
  scoresSelector,
  (scoresArr) => {
    return scoresArr.toArray().reduce((aggArr, scores, index) => {
      if (index === 0) return scores.map(score => score / (scores.length * 2));
      return aggArr.map((agg, i) => {
        return agg + scores[i] / (scores.length * 2);
      });
    }, []);
  }
);
