import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import query from '../queries/fetchSong';

const SongDetail = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(query, { variables: { id } });

  useEffect(() => {
    console.log('songDetail', data);
  }, [loading]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const {
    song: { title },
  } = data;
  return (
    <div>
      <h3>Song Detail</h3>
      <h4>{title}</h4>
    </div>
  );
};

export default SongDetail;
