import { NEW_PROMPT } from './common';

const CHANGE_TAB = 'CHANGE_TAB';
const TOGGLE_MODAL = 'TOGGLE_MODAL';

/*
 * Display Reducer
 *
 * state has the following properties:
 * @tab: The index of the currently visible view container
 * @modal: A boolean defining modal visibility
 *
 */
export default function reducer(state, action) {
  switch (action.type) {
    case NEW_PROMPT:
      return state.set('modal', false);
    case CHANGE_TAB:
      return state.set('tab', action.tab);
    case TOGGLE_MODAL:
      return state.set('modal', !(state.get('modal')));
    default:
      return state;
  }
}

// Action Creator: Changes currently visible view container
export function changeTab(tab) {
  return {
    type: CHANGE_TAB,
    tab,
  };
}

// Action Creator: Toggles New Prompt modal visibility
export function toggleModal() {
  return { type: TOGGLE_MODAL };
}
