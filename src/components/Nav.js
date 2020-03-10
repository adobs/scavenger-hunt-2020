import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

const activeStyle = {
  color: 'black',
  fontWeight: 'bold'
};

function nav() {
  return (
    <nav className={styles.Nav}>
      <NavLink activeStyle={activeStyle} exact to="/" className={styles.Link}>
        Hints
      </NavLink>
      <NavLink activeStyle={activeStyle} to="/solved" className={styles.Link}>
        Solved
      </NavLink>
    </nav>
  );
}

export default nav;
