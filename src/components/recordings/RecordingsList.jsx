import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Recording from '../recordings/RecordingsItem';
import { fetchRecordings } from '../../services/musicBrainz';
import Header from '../app/Header';

const RecordingsList = () => {
  const { id } = useParams();
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    fetchRecordings(id)
      .then(setRecordings);
  }, [id]);


  return <>
    <Header />
    <h1>Recordings</h1>
    
    <ul>
      {recordings.map((recording => (
        <Recording {...recording} key={recording.id} />
      )))
      }
    </ul>
  </>;
};

export default RecordingsList;


