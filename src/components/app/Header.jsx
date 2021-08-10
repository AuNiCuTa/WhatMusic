import React from 'react';
import styles from './header.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>What Music</h1>
      <label>
        <input></input>
        <button></button>
      </label>
    </header>
  );
};

export default Header;
