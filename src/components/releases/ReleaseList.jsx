import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../app/Header';
import { useReleases } from '../../state/state';


const ReleaseList = () => {
  const { id } = useParams();
  const { releases, loading } = useReleases(id);

  return (
    <>
      <Header setSearchTerm={(e) => e.preventDefault()} />

      {!loading && (
        <ul>
          {releases.map((release) => (
            <li key={release.id}>
              <img src={release.cover} />

              <span>{release.title}</span>
              <span>{release['release-events'][0].date}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ReleaseList;
