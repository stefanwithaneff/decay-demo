import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import rootReducer from './modules';
import App from './components';
import { newPrompt } from './modules/common';
import reduxLocalStore from './utils/reduxLocalStore';
import timerMngr from './utils/reduxTimerMgmt';

/* eslint-disable new-cap */
const defaultState = Immutable.Map({
  data: Immutable.List(),
  display: Immutable.Map({
    tab: 0,
    modal: false,
  }),
  assessment: Immutable.Map({
    prompt: newPrompt(12).prompt,
    lastReintroduced: null,
    view: 'practice',
  }),
  history: Immutable.Map({
    scores: Immutable.List(),
    index: 0,
  }),
});
/* eslint-enable */

// Attempt to load initial state from HTML5 LocalStorage API
let initialState = defaultState;
if (typeof Storage !== 'undefined') {
  if (localStorage.state !== undefined) {
    initialState = Immutable.fromJS(JSON.parse(localStorage.state), (key, value) => {
      const isIndexed = Immutable.Iterable.isIndexed(value);
      if (isIndexed) {
        if (key !== 'scores' && key !== 'data') {
          return value.toArray();
        }
        return value.toList();
      }
      return value.toMap();
    }).setIn(['display', 'modal'], false); // Closes modal if saved in open state
  }
}

const store = Redux.createStore(rootReducer,
  initialState,
  Redux.applyMiddleware(reduxLocalStore, timerMngr));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);

window.reqData = () => {
  console.log(store.getState().toJS());
};
