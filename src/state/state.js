import { useEffect, useState } from 'react';
import { fetchArtists, fetchReleases } from '../services/musicBrainz.js';
import { fetchCoverArt } from '../services/coverArt';

const useArtists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    searchTerm && fetchArtists(searchTerm, page)
      .then(({ artists, count }) => {
        setArtists(artists || []);
        if (count < (page + 1) * 25) setPage(Math.floor(count / 25));
      })
      .then(() => setLoading(false))
      .catch(err => console.log(err))
    ;
  }, [searchTerm, page]);

  return { artists, loading, setSearchTerm, page, setPage };
};

const useReleases = (id) => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReleases(id)
      .then(releases => Promise.all(releases.map(release => {
        return fetchCoverArt(release.id)
          .then(cover => ({ ...release, cover }))
        ;
      })))
      .then(releases => setReleases(releases))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return { loading, releases };
};




export { useArtists, useReleases };


