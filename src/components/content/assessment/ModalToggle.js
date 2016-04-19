import React from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import { toggleModal } from '../../../modules/display';

const ModalToggle = (props) => {
  return (
    <div className="modal-toggle">
      <span onClick={() => props.toggleModal()}>New Prompt</span>
    </div>
  );
};

ModalToggle.propTypes = {
  toggleModal: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    toggleModal: Redux.bindActionCreators(toggleModal, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(ModalToggle);
