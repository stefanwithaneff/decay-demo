export const LOG_DATA = 'LOG_DATA';
export const NEW_PROMPT = 'NEW_PROMPT';

// Action Creator: Logs assessment results
export function logData(score, k) {
  return {
    type: LOG_DATA,
    k,
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
    })
    .join('');

  return {
    type: NEW_PROMPT,
    prompt,
  };
}

// Compare prompt and response to derive score
export function recordScore(prompt, responseStr) {
  const res = responseStr.toUpperCase().split('');
  // eslint-disable-next-line prefer-const
  let score = prompt.split('').slice();
  // Score correct letter, correct placement
  res.forEach((char, i) => {
    if (char === score[i]) {
      score[i] = res[i] = 2;
    }
  });

  // Score correct letter, incorrect placement
  res.forEach((char) => {
    if (typeof char === 'number') return;
    if (score.indexOf(char) !== -1) {
      score[score.indexOf(char)] = 1;
    }
  });

  // Score incorrect letter
  return score.map((char) => {
    return (typeof char === 'string') ? 0 : char;
  });
}

// Derive k value from score array and last reintroduction time
export function deriveK(scoreArr, lastReintro) {
  let score = scoreArr.reduce((sum, char) => sum + char / (scoreArr.length * 2), 0);
  if (score > 0.9) {
    score = 0.9;
  } else if (score === 0) {
    score = 1 / (scoreArr.length * 2);
  }
  return Math.abs(Math.log(score) / ((Date.now() - lastReintro) / 1000));
}
