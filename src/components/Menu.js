import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu.module.css';
import Tooltip from './Tooltip';

function Menu({ onClickHandler, selectedText }) {
  // Array of 10 values (0 to 9)
  const numbers = [...Array(10).keys()];
  const numbersMenu = numbers.map(number => {
    const prettyNumber = number + 1;
    return (
      <li className={styles.Li} key={number}>
        <Tooltip text={`Day ${prettyNumber}`}>
          <button
            className={selectedText === prettyNumber ? styles.Highlight : null}
            onClick={evt => onClickHandler(prettyNumber, evt)}
          >
            {prettyNumber}
          </button>
        </Tooltip>
      </li>
    );
  });
  return <ul className={styles.Menu}>{numbersMenu}</ul>;
}

Menu.propTypes = {
  onClickHandler: PropTypes.func.isRequired
};

export default Menu;
