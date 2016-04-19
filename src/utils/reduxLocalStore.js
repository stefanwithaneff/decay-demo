/*
 * Redux Local Storage Middleware
 */
export default function reduxLocalStore(store) {
  return next => action => {
    const returnValue = next(action);
    if (typeof Storage !== 'undefined' &&
      store.getState().get('assessment').get('view') !== 'practice2') {
      localStorage.state = JSON.stringify(store.getState().toJS());
    }
    return returnValue;
  };
}
