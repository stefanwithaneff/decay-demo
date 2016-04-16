import { LOG_DATA, NEW_PROMPT } from './common';
import { createSelector } from 'reselect';

const RECALL_THRESHOLD = 0.85;

/*
 * Data Reducer
 *
 * state is an Immutable.List of coefficients from previous forgetting curves
 *
 */
export default function reducer(state, action) {
  switch (action.type) {
    case NEW_PROMPT:
      return state.clear();
    case LOG_DATA:
      return state.push(action.k);
    default:
      return state;
  }
}

const dataSelector = state => state.get('data');

// Selector: Derives the decay model equation
export const kStarSelector = createSelector(
  dataSelector,
  (data) => {
    // Return null if data is too small to manipulate
    if (data.size < 2) return null;

    // Convert data List to array of log transformed coefficients
    const lnKArray = data.toArray().map(k => Math.log(k));

    // Calculate helper summations
    const n = lnKArray.length;
    const sumN = n * (n + 1) / 2;
    const sumN2 = n * (n + 1) * (2 * n + 1) / 6;
    const sumLNK = lnKArray.reduce((sum, lnK) => sum + lnK, 0);
    const sumLNK2 = lnKArray.reduce((sum, lnK) => sum + lnK * lnK, 0);
    const sumNLNK = lnKArray.reduce((sum, lnK, index) => sum + lnK * (index + 1), 0);

    // Calculate components of Pearson coefficient for a population
    const meanN = sumN / n;
    const meanLNK = sumLNK / n;
    const meanNLNK = sumNLNK / n;
    const meanN2 = sumN2 / n;
    const meanLNK2 = sumLNK2 / n;
    const sdN = Math.sqrt(meanN2 - meanN * meanN);
    const sdLNK = Math.sqrt(meanLNK2 - meanLNK * meanLNK);
    const covariance = (meanNLNK - meanN * meanLNK);

    const rho = covariance / (sdN * sdLNK); // Pearson correlation coefficient
    const m = covariance / (sdN * sdN); // Slope of the log-linear regression line
    const b = meanLNK - m * meanN; // Intercept of the log-linear regression line

    // Produces equation k* = e^(m*n + b) where n is the number of assessments completed
    return {
      slope: m,
      intercept: b,
      r: rho,
    };
  }
);

// Selector: Derives the re-introduction delay (in seconds)
export const delaySelector = createSelector(
  kStarSelector,
  dataSelector,
  (kStar, data) => {
    let k; // Predicted coefficient of new forgetting curve

    // Define predicted value for k
    // Return naive estimate if data is too small
    if (kStar === null) {
      if (data.size === 0) return 5000;
      if (data.size === 1) {
        k = data.get(0) / 2;
      }
    } else {
      k = Math.exp(kStar.slope * (data.size + 1) + kStar.intercept);
    }

    return Math.floor(Math.abs(Math.log(RECALL_THRESHOLD) / k));
  }
);
