import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import query from '../queries/fetchSong';
import LyricCreate from '../components/LyricCreate';
import LyricList from '../components/LyricList';

const SongDetail = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(query, { variables: { id } });

  useEffect(() => {
    console.log('songDetail', data);
  }, [loading]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const {
    song: { title, lyrics },
  } = data;
  return (
    <div>
      <Link to='/'>Back</Link>
      <h3>Song Detail</h3>
      <h4>{title}</h4>
      <LyricList lyrics={lyrics} />
      <LyricCreate songId={id} />
    </div>
  );
};

export default SongDetail;
