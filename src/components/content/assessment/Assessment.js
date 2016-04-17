import React from 'react';
import Prompt from './Prompt';
import WaitMessage from './WaitMessage';

const Assessment = (props) => {
  return (
    <div className="assessment">
      { (props.view === 'wait') ? <Prompt /> : <WaitMessage /> }
    </div>
  );
};

Assessment.propTypes = {
  view: React.PropTypes.string.isRequired,
};

export default Assessment;
