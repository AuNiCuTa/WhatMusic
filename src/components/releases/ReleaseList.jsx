import React from 'react';
import Header from '../app/Header';
import { useReleases } from '../../state/state';
import PropTypes from 'prop-types';

const ReleaseList = (props) => {

  const { releases, loading } = useReleases(props.match.params.id);

  return <>
    <Header setSearchTerm={e => e.preventDefault()} />

    {!loading && <ul>
      {releases.map(release => <li key={release.id}>
        <span>{release.title}</span>
        <span>{release['release-events'][0].date}</span>


      </li>)}
    </ul>}
  </>;
};

ReleaseList.propTypes = {
  match: PropTypes.object
};

export default ReleaseList;



