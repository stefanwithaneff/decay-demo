import React from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import Header from './header/Header';
import TabbedWindow from './content/TabbedWindow';
import Modal from './modal/Modal';
import { newPrompt } from '../modules/common';
import { setTimerForPrompt } from '../modules/assessment';
import { toggleModal } from '../modules/display';
import { delaySelector } from '../modules/data';

const App = (props) => {
  return (
    <div className="container">
      <Header delay={props.delay}
        lastReintro={props.lastReintroduced}
        view={props.view}
        setTimer={props.setTimerForPrompt}
      />
      <TabbedWindow tab={props.tab} view={props.view} />
      <Modal modal={props.modal} onToggle={props.toggleModal} newPrompt={props.newPrompt} />
    </div>
  );
};

App.propTypes = {
  tab: React.PropTypes.number.isRequired,
  modal: React.PropTypes.bool.isRequired,
  view: React.PropTypes.string.isRequired,
  delay: React.PropTypes.number.isRequired,
  lastReintroduced: React.PropTypes.number,
  toggleModal: React.PropTypes.func.isRequired,
  newPrompt: React.PropTypes.func.isRequired,
  setTimerForPrompt: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tab: state.get('display').get('tab'),
  modal: state.get('display').get('modal'),
  view: state.get('assessment').get('view'),
  delay: delaySelector(state),
  lastReintroduced: state.get('assessment').get('lastReintroduced'),
});

const mapDispatchToProps = (dispatch) => {
  return Redux.bindActionCreators({
    toggleModal, newPrompt, setTimerForPrompt,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
