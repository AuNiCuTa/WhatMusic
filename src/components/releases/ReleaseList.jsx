import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from '../app/Header';
import { useReleases } from '../../state/state';


const ReleaseList = () => {
  const { id } = useParams();
  const { releases, loading } = useReleases(id);

  return (
    <>
      <Header />
      <h1>Releases</h1>

      {!loading && (
        <ul>
          {releases.map((release) => (
            <li key={release.id}>
              <Link to={`/releases/${release.id}`}>
                <img src={release.cover} />

                <span>{release.title}</span>
                <span>{release['release-events'][0].date}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ReleaseList;
