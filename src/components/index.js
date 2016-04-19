import React from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import Header from './header/Header';
import TabbedWindow from './content/TabbedWindow';
import Modal from './modal/Modal';
import { newPrompt } from '../modules/common';
import { toggleModal } from '../modules/display';

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <TabbedWindow tab={props.tab} view={props.view} />
      <Modal modal={props.modal} onToggle={props.toggleModal} newPrompt={props.newPrompt} />
    </div>
  );
};

App.propTypes = {
  tab: React.PropTypes.number.isRequired,
  modal: React.PropTypes.bool.isRequired,
  view: React.PropTypes.string.isRequired,
  toggleModal: React.PropTypes.func.isRequired,
  newPrompt: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tab: state.get('display').get('tab'),
  modal: state.get('display').get('modal'),
  view: state.get('assessment').get('view'),
  lastReintroduced: state.get('assessment').get('lastReintroduced'),
});

const mapDispatchToProps = (dispatch) => {
  return Redux.bindActionCreators({ toggleModal, newPrompt }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
