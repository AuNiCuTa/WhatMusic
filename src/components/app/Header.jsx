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
      <Link className={styles.sign} to="/">
        <span className={styles.fastFlicker}>W</span>
        <span className={(styles.flicker, styles.space)}>hat</span>
        <span className={styles.flicker}>Mu</span>
        <span className={styles.fastFlicker}>si</span>
        <span className={styles.flicker}>c</span>
      </Link>

      <form name="search" data-testid="form" onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          placeholder="search"
          defaultValue={query.get('searchTerm')}
        ></input>

        <button
          className={styles.headerButton}
          data-testid="find"
          type="submit"
        >
          find
        </button>
      </form>

      <div></div>
    </header>
  );
};

Header.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default Header;
