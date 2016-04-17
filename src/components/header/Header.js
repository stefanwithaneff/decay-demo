import React from 'react';
import Timer from './Timer';
import TabNavigator from './TabNavigator';

const Header = (props) => {
  return (
    <header>
      <Timer delay={props.delay} lastReintro={props.lastReintro} view={props.view} />
      <TabNavigator />
    </header>
  );
};

Header.propTypes = {
  delay: React.PropTypes.number.isRequired,
  lastReintro: React.PropTypes.number,
  view: React.PropTypes.string.isRequired,
};

export default Header;
