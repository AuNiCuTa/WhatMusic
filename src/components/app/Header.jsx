import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.css';
import Search from './Search';

const Header = props => {

  const handleSubmit = e => {
    e.preventDefault();
    props.setSearchTerm(e.target.search.value);
  };

  return (
    <header className={styles.header}>
      <h1>What Music</h1>
      <form 
        name="search"
        onSubmit={handleSubmit}
      >
        <input name="search" type="text"></input>
        <button type="submit">find</button>
      </form>
    </header>
  );
};

Header.propTypes = {
  setSearchTerm: PropTypes.func
};

export default Header;
