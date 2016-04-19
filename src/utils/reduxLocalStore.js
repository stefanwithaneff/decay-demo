/*
 * Redux Local Storage Middleware
 */
export default function reduxLocalStore(store) {
  return next => action => {
    next(action);
    if (typeof Storage !== 'undefined' &&
      ['wait', 'score'].indexOf(store.getState().get('assessment').get('view')) !== -1) {
      localStorage.state = JSON.stringify(store.getState().toJS());
    }
    return;
  };
}
