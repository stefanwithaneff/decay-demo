import { LOG_DATA, NEW_PROMPT } from './common';
const READY_PROMPT = 'READY_PROMPT';
const NEXT_PRACTICE = 'NEXT_PRACTICE';

/*
 * Assessment Reducer
 *
 * state has the following properties:
 * @prompt: The randomly generated alphanumeric string used in the assessment
 * @lastReintroduced: Most recent time (in milliseconds) that the assessment was completed
 * @view: String defining the current configuration of the assessment view
 *     ['practice', 'practice2', 'wait', 'prompt', 'score']
 *
 */
export default function assessmentReducer(state, action) {
  switch (action.type) {
    case NEW_PROMPT:
      return state.withMutations((oldState) => {
        oldState
          .set('prompt', action.prompt)
          .set('lastReintroduced', null)
          .set('view', 'practice');
      });
    case NEXT_PRACTICE:
      return state.withMutations((oldState) => {
        oldState
          .set('lastReintroduced', action.time)
          .set('view', action.view);
      });
    case READY_PROMPT:
      return state.set('view', 'prompt');
    case LOG_DATA:
      return state.set('view', 'score');
    default:
      return state;
  }
}

// Action Creator: Signals view transitions to and from the practice views
export function nextPractice(currentView) {
  let newView = '';
  switch (currentView) {
    case 'practice':
      newView = 'practice2';
      break;
    case 'practice2':
      newView = 'wait';
      break;
    case 'score':
      newView = 'practice';
      break;
    default:
  }

  return {
    type: NEXT_PRACTICE,
    view: newView,
    time: Date.now(),
  };
}

// Action Creator: Sets timer for view transition to unassisted prompt
// expects delay to be in milliseconds
export function setTimerForPrompt(delay) {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: READY_PROMPT });
    }, delay);
  };
}
