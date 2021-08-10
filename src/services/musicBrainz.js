const musicBrainz = 'http://musicbrainz.org/ws/2/';
export const fetchArtists = async (searchTerm) => {
  return await fetch(
    `${musicBrainz}artist?query=${searchTerm}&fmt=json&limit=25`
  )
    .then(res => res.json())
    .then(json => json.artists)
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
