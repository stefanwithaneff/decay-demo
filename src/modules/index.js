import dataReducer from './data';
import displayReducer from './display';
import assessmentReducer from './assessment';
import historyReducer from './history';

/*
 * Root Reducer
 *
 * state has the following properties:
 * @data: Data from the assessment used in decay modelling
 * @display: Miscellaneous state for managing the view
 * @assessment: State for the assessment view
 * @history: Scoring history from the assessment and state for managing the history view
 *
 */
export default function reducer(state, action) {
  return state.withMutations(oldState => {
    oldState
      .set('data', dataReducer(oldState.get('data'), action))
      .set('display', displayReducer(oldState.get('display'), action))
      .set('assessment', assessmentReducer(oldState.get('assessment'), action))
      .set('history', historyReducer(oldState.get('history'), action));
  });
}
