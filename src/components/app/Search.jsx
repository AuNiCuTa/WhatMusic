import React from 'react';
import { useArtists } from '../../state/state.js';

const Search = () => {
  const { setSearchTerm } = useArtists();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchTerm(e.target.search.value);
  };

  return (
    <form 
      name="search"
      onSubmit={handleSubmit}
    >
      <input name="search" type="text"></input>
      <button type="submit">find</button>
    </form>
  );
};

export default Search;
