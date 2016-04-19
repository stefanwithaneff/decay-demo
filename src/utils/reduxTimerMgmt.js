// Helper function: Clones action object while stripping meta property
function cloneActionSansDelay(action) {
  let copy = {}; // eslint-disable-line prefer-const
  Object.keys(action).forEach((key) => {
    copy[key] = action[key];
    if (key === 'meta') {
      copy[key].delay = undefined;
    }
  });

  return copy;
}

/*
 * Redux Timer Management Middleware
 *
 * Sets a timer for an action if the action has a delay property
 * Expects delay to be in seconds
 * Returns a function wrapper for cancelling the timeout
 *
 */
export default function timerMgmtMiddleware() {
  return next => action => {
    if (action.meta && action.meta.delay) {
      const timer = setTimeout(() => {
        return next(cloneActionSansDelay(action));
      }, action.meta.delay > 0 ? action.meta.delay * 1000 : 0);

      return () => clearTimeout(timer);
    }
    return next(action);
  };
}
