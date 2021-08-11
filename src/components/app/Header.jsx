import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './header.css';

const Header = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearchTerm(e.target.search.value);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>What Music</h1>
      </Link>
      <form name="search" onSubmit={handleSubmit}>
        <input name="search" type="text"></input>
        <button type="submit">find</button>
      </form>
    </header>
  );
};

Header.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default Header;
