import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
        return null;
    }

    // The gray background
    const backdropStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50
    };

    // The modal "window"
    const modalStyle = {
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: 5,
        maxWidth: 500,
        minHeight: 300,
        margin: '0 auto',
        padding: 30
    };

    const closeStyle = {
        position: 'absolute',
        top: 8,
        right: 5,
        border: 'none'
    };

    return (
        <div className="backdrop" style={backdropStyle}>
            <div className="modal" style={modalStyle}>
                <button
                    className="close"
                    style={closeStyle}
                    onClick={this.props.onClose}
                >
                    <FaTimes size={22} />
                </button>
                {this.props.children}
            </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
