export const LOG_DATA = 'LOG_DATA';
export const NEW_PROMPT = 'NEW_PROMPT';

// Action Creator: Logs assessment results
export function logData(score) {
  return {
    type: LOG_DATA,
    score,
    time: Date.now(),
  };
}

// Action Creator: Generates a new prompt string and resets the app
export function newPrompt(length) {
  // Randomly generate new prompt of given length
  const prompt = Array.apply(null, { length })
    .map(() => {
      return (Math.random() < 0.4) ?
          String.fromCharCode((Math.floor(Math.random() * 10)) + 48) :
          String.fromCharCode((Math.floor(Math.random() * 26)) + 65);
    });

  return {
    type: NEW_PROMPT,
    prompt,
  };
}
