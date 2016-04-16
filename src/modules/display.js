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
    case CHANGE_TAB:
      return state.set('tab', action.tab);
    case TOGGLE_MODAL:
      return state.set('modal', !(state.get('modal')));
    default:
      return state;
  }
}

export function changeTab(tab) {
  return {
    type: CHANGE_TAB,
    tab,
  };
}

export function toggleModal() {
  return { type: TOGGLE_MODAL };
}
