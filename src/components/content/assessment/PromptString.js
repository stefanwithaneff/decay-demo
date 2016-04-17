import React from 'react';

const PromptString = (props) => {
  return (
    <div className="prompt-string">
      {
        props.prompt.split('').map((char, i) => {
          return (
            <span key={`char-${i}`}
              className={(props.view === 'score') ?
                `prompt-char score-${props.score[i]}` : 'prompt-car'
              }
            >
              {char}
            </span>
          );
        })
      }
    </div>
  );
};

PromptString.propTypes = {
  prompt: React.PropTypes.string.isRequired,
  view: React.PropTypes.string.isRequired,
  score: React.PropTypes.array,
};

export default PromptString;
