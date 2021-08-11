import React from 'react';
import { Link } from 'react-router-dom';
import { useArtists } from '../../state/state.js';
import Header from '../app/Header';

const ArtistList = () => {
  const { artists, loading, setSearchTerm, page, setPage } = useArtists();

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />

      {!loading && <>
        <div>
          <button onClick={() => setPage(Math.max(0, page - 1))}>←</button>
          <span>{page + 1}</span>
          <button
            onClick={() => setPage(Math.min(100, page + 1))}
          >→</button>
        </div>

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
      </>}
    </>
  );
};

export default ArtistList;
