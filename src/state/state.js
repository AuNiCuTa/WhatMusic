import { useEffect, useState } from 'react';
import { fetchArtists, fetchReleases } from '../services/musicBrainz.js';

const useArtists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    searchTerm && fetchArtists(searchTerm)
      .then(res => setArtists(res))
      .then(() => setLoading(false))
      .catch(err => console.log(err))
      ;
  }, [searchTerm]);


  return { artists, loading, setSearchTerm };
};

const useReleases = (id) => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReleases(id)
      .then(releases => setReleases(releases))
      .then(() => setLoading(false))
      .catch(err => console.log(err));
  }, []);

  return { loading, releases };
};




export { useArtists, useReleases };


