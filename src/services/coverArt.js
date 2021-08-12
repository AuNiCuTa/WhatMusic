const coverArt = 'https://coverartarchive.org/release/';

export const fetchCoverArt = async (releaseId) => {
  const url = `${coverArt}${releaseId}/front`;

  const retVal = await fetch(url)
    .then(res => {
      return res.status === 404
        ? 'https://placekitten.com/200/286'
        : url;
    })
    .catch(err => console.log(err))
  ;

  return retVal;
};

