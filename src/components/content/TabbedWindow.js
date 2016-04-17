import React from 'react';
import Assessment from './assessment/Assessment';
import Data from './data/Data';
import History from './history/History';

const TabbedWindow = (props) => {
  if (props.tab === 1) return <Data />;
  if (props.tab === 2) return <History />;
  return <Assessment />;
};

TabbedWindow.propTypes = {
  tab: React.PropTypes.number.isRequired,
};

export default TabbedWindow;
