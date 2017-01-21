import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import { Alert } from 'react-bootstrap';

class AlertContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let { showAlert, message, alertStyle } = this.props;
    if (['success', 'error', 'warning'].indexOf(alertStyle) === -1){
      alertStyle = 'success';
    }

    return (
      <div className="alert-container" ref="alert_container">
        {showAlert && <Alert className={alertStyle} onDismiss={this.props.onAlertDismiss}>
          {message}
        </Alert>}
      </div>  
    );
  }
}

AlertContainer.propTypes = {
  message: PropTypes.string.isRequired,
  onAlertDismiss: PropTypes.func.isRequired,
  showAlert: PropTypes.bool,
  alertStyle: PropTypes.string
}

export default AlertContainer;