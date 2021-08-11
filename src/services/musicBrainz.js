/* eslint-disable no-console */
const musicBrainz = 'http://musicbrainz.org/ws/2/';

export const fetchArtists = async (searchTerm, page) => {
  // eslint-disable-next-line max-len
  const url = `${musicBrainz}artist?query=${searchTerm}&fmt=json&limit=25&offset=${page * 25}`;

  return await fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));
};

export const fetchReleases = async (id) => {
  return await fetch(
    `${musicBrainz}release?artist=${id}&fmt=json`
  )
    .then(res => res.json())
    .then(json => json.releases)
    .catch(error => console.log(error));
};

export const fetchRecordings = async (id) => {
  return await fetch(
    `${musicBrainz}recording?release=${id}&fmt=json`
  )
    .then(res => res.json())
    .then(json => json.recordings)
    .catch(error => console.log(error));
};
