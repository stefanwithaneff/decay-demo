import React from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import TabbedWindow from '../components/TabbedWindow';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { toggleModal } from '../modules/display';
import { delaySelector } from '../modules/data';

const App = (props) => {
  return (
    <div className="container">
      <Header delay={props.delay}
        lastReintro={props.lastReintroduced}
        view={props.view}
      />
      <TabbedWindow tab={props.tab} />
      <Footer onToggle={props.toggleModal} />
      <Modal modal={props.modal} onToggle={props.toggleModal} />
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
};

const mapStateToProps = (state) => ({
  tab: state.get('display').get('tab'),
  modal: state.get('display').get('modal'),
  view: state.get('assessment').get('view'),
  delay: delaySelector(state),
  lastReintroduced: state.get('assessment').get('lastReintroduced'),
});

const mapDispatchToProps = (dispatch) => {
  return Redux.bindActionCreators({ toggleModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
