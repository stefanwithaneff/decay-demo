import React from 'react';

const Modal = (props) => <div onClick={() => props.onToggle()}>{(props.modal) ? 'true' : 'false'}</div>;

Modal.propTypes = {
  modal: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func.isRequired,
};

export default Modal;
