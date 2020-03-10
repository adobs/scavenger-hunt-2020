import React from 'react';
import PropTypes from 'prop-types';
import styles from './tooltip.module.css';
import Hover from './Hover';

function Tooltip({ text, children }) {
  return (
    <Hover>
      {hovering => (
        <div className={styles.Container}>
          {hovering === true && <div className={styles.Tooltip}>{text}</div>}
          {children}
        </div>
      )}
    </Hover>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired
};

export default Tooltip;
