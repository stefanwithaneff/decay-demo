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
        return next(action);
      }, action.meta.delay > 0 ? action.meta.delay * 1000 : 0);

      return () => clearTimeout(timer);
    }
    return next(action);
  };
}
