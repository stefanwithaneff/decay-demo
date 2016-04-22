import React from 'react';

const HistoryVis = (props) => {
  if (props.scores.size === 0) {
    return (
      <div className="prompt-string empty">
        {
          props.prompt.split('').map((char, i) => {
            return <span key={`char-${i}`} className="prompt-char">{char}</span>;
          })
        }
      </div>
    );
  }
  return (
    <div className="prompt-string">
      {
        (props.index < 0) ?
          props.scoreAgg.map((freq, i) => {
            return (
              <span key={`char-${i}`}
                className="prompt-char"
                style={{ backgroundColor: `hsl(${360 - Math.floor(freq * 240)}, 100%, 70%)` }}
              >
                {props.prompt[i]}
              </span>
            );
          }) :
          props.scores.get(props.index).map((score, i) => {
            return (
              <span key={`char-${i}`} className={`prompt-char score-${score}`}>
                {props.prompt[i]}
              </span>
            );
          })
      }
    </div>
  );
};

HistoryVis.propTypes = {
  index: React.PropTypes.number.isRequired,
  scores: React.PropTypes.object,
  scoreAgg: React.PropTypes.array,
  prompt: React.PropTypes.string.isRequired,
};

export default HistoryVis;
