import React from 'react';
import Tab from './Tab';

const TabNavigator = () => {
  return (
    <nav>
      <Tab index={0}>Assessment</Tab>
      <Tab index={1}>Data</Tab>
      <Tab index={2}>History</Tab>
    </nav>
  );
};

export default TabNavigator;
