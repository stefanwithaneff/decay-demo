import React from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import { changeTab } from '../modules/display';

const Tab = (props) => {
  return (
    <span className={(props.tab === props.index) ? 'tab selected' : 'tab'}
      onClick={() => props.onTabSelect(props.index)}
    >
      {props.children}
    </span>
  );
};

Tab.propTypes = {
  children: React.PropTypes.node.isRequired,
  tab: React.PropTypes.number.isRequired,
  index: React.PropTypes.number.isRequired,
  onTabSelect: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tab: state.get('display').get('tab'),
});

const mapDispatchToProps = dispatch => ({
  onTabSelect: Redux.bindActionCreators(changeTab, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
