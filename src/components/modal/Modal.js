import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.onNew = this.onNew.bind(this);
  }

  // Resets radio buttons when modal is opened
  componentWillUpdate(newProps) {
    if (newProps.modal && !this.props.modal) {
      const option = this.radioDiv.querySelector('input:checked');
      if (option) option.checked = false;
    }
  }

  onNew() {
    this.props.newPrompt(Number(this.radioDiv.querySelector('input:checked').value));
  }

  render() {
    return (
      <div className={(this.props.modal) ? 'modal-container' : 'modal-container hidden'}>
        <div className="modal">
          <h2 className="modal-info">
            Choose a character length for the new prompt
          </h2>
          <div ref={(e) => { this.radioDiv = e; }} className="modal-options">
            <input id="short" type="radio" name="length" value="12" />
            <label htmlFor="short">Short</label><br />
            <input id="med" type="radio" name="length" value="16" />
            <label htmlFor="med">Medium</label><br />
            <input id="long" type="radio" name="length" value="20" />
            <label htmlFor="long">Long</label>
          </div>
          <div className="modal-buttons">
            <button className="new" onClick={this.onNew}>New Prompt</button>
            <button className="toggle" onClick={this.props.onToggle}>Cancel</button>
          </div>
          <div className="modal-warning">
            Warning: Generating a new prompt will delete all current data.
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modal: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func.isRequired,
  newPrompt: React.PropTypes.func.isRequired,
};
