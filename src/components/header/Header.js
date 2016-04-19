import React from 'react';
import Timer from './Timer';
import TabNavigator from './TabNavigator';

const Header = () => {
  return (
    <header>
      <Timer />
      <TabNavigator />
    </header>
  );
};

export default Header;
