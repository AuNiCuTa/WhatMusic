import React from 'react';
import { Link } from 'react-router-dom';
import { useArtists } from '../../state/state.js';
import Header from '../app/Header';

const ArtistList = () => {
  const { artists, loading, setSearchTerm } = useArtists();

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />

      {!loading && (
        <ul>
          {artists.map((artist) => (
            <li key={artist.id}>
              <Link to={`/artist/${artist.id}`}>
                <span>{artist.name}</span>
                <span>{artist.disambiguation}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ArtistList;
