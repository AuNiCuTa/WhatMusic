/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { useArtists } from '../../state/state.js';
import Header from '../app/Header';
import styles from '../app/app.css';

const ArtistList = () => {
  const { artists, loading, setSearchTerm, page, setPage } = useArtists();

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />

      {loading ? (
        <img
          src="https://media3.giphy.com/media/l0NwNQ5nfmFOPvv5m/giphy.gif?cid=ecf05e47k1cvpg2ogswcd5fbktd7xt63qb1zytmm9ffbms1g&rid=giphy.gif&ct=g"
          alt="loading..."
        />
      ) : (
        <section className={styles.list}>
          <div>
            <button onClick={() => setPage(Math.max(0, page - 1))}>←</button>
            <span className={styles.page}>{page + 1}</span>
            <button onClick={() => setPage(Math.min(100, page + 1))}>→</button>
          </div>

          <ul role="list" data-testid="list">
            {artists.map((artist) => (
              <li key={artist.id}>
                <Link to={`/artist/${artist.id}`}>
                  <span>{artist.name}</span>
                  <span>{artist.disambiguation}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default ArtistList;
