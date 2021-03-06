import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import styles from './modal.module.css';

function Modal({ show, onClose, children }) {
  // Render nothing if the "show" prop is false
  if (!show) {
    return null;
  }
  return (
    <div className={styles.Backdrop}>
      <div className={styles.Modal}>
        <button className={styles.Close} onClick={onClose}>
          <FaTimes size={22} />
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
