import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import rootReducer from './modules';
import { newPrompt } from './modules/common';

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
    index: -1,
  }),
});
/* eslint-enable */

let initialState = defaultState;
if (typeof Storage !== 'undefined') {
  if (localStorage.state !== undefined) {
    initialState = Immutable.fromJS(JSON.parse(localStorage.state));
  }
}

const store = Redux.createStore(rootReducer, initialState, Redux.applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <h1>{store.getState().get('assessment').get('prompt')}</h1>
  </Provider>,
  document.querySelector('#app')
);
