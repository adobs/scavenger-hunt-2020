import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import styles from './modal.module.css';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
        return null;
    }

    return (
        <div className={styles.Backdrop}>
            <div className={styles.Modal}>
                <button
                    className={styles.Close}
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
