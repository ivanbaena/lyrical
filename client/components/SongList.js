import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const SongList = () => {
  const { loading, error, data } = useQuery(query);
  useEffect(() => {
    console.log(loading, error, data);
  }, [loading]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <ul className='collection'>
        {data.songs.map((song) => {
          return <li className='collection-item'>{song.title}</li>;
        })}
      </ul>
    </div>
  );
};

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default SongList;
