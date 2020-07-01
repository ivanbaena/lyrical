import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import query from '../queries/fetchSongs';

const SongList = () => {
  const { loading, error, data } = useQuery(query);
  const [deleteSong] = useMutation(mutation, {
    refetchQueries: [{ query: query }],
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <ul className='collection'>
        {data.songs.map(({ title, id }) => {
          return (
            <li className='collection-item'>
              <Link to={`/songs/id/${id}`}>{title}</Link>
              <i
                className='material-icons'
                onClick={() => deleteSong({ variables: { id } })}
              >
                delete
              </i>
            </li>
          );
        })}
      </ul>
      <Link to='/songs/new' className='btn-floating btn-large red right'>
        <i className='material-icons'>add</i>
      </Link>
    </div>
  );
};

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default SongList;
