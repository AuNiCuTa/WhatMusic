const musicBrainz = 'http://musicbrainz.org/ws/2/';
export const fetchArtists = async (searchTerm) => {
  return await fetch(
    `${musicBrainz}artist?query=${searchTerm}&fmt=json&limit=25`
  )
    .then(res => res.json())
    .then(json => json.artists)
    .catch(error => console.log(error));
};
