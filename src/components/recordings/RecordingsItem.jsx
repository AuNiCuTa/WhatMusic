import React from 'react';
import { Link } from 'react-router-dom';

const Recording = ({ id, title }) => {
  return (
    <li key={id}>
      <Link to={{
        pathname: `/recordings/${id}`,
        state: {
          title
        },
      }}>
        <h1>{title}</h1>
      </Link>
    </li>
  );
};

export default Recording;

