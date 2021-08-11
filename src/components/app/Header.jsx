import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './header.css';

const Header = (props) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.setSearchTerm) props.setSearchTerm(e.target.search.value);
    else history.push(`/home?searchTerm=${e.target.search.value}`);
  };

  const query = new URLSearchParams(useLocation().search);

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>What Music</h1>
      </Link>
      <form name="search" onSubmit={handleSubmit}>
        <input 
          name="search" 
          type="text" 
          defaultValue={query.get('searchTerm')}
        ></input>
        <button type="submit">find</button>
      </form>
    </header>
  );
};

Header.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default Header;
