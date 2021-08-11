const coverArt = 'http://coverartarchive.org/release/';

export const fetchCoverArt = async (releaseId) => {
  return await fetch(`${coverArt}${releaseId}/front`)
    .then(res => res.redirected
      ? res.url
      : 'https://placekitten.com/200/286'
    );


};

