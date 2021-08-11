import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../app/Header';
import { useReleases } from '../../state/state';
import coverArtFetch from '../../services/coverArt';


const ReleaseList = () => {
  const { id } = useParams();
  const { releases, loading } = useReleases(id);
  const coverArt = 'http://coverartarchive.org/release/';

  console.log('releaseList', releases);

  return (
    <>
      <Header setSearchTerm={(e) => e.preventDefault()} />

      {!loading && (
        <ul>
          {releases.map((release) => (
            <li key={release.id}>
              <img src={`${coverArt}${release.id}/front` || 'https://placekitten.com/200/286'} />

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
