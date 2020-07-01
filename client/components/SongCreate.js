import React, { useEffect, useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import query from '../queries/fetchSongs';

const SongCreate = (props) => {
  const [title, setTitle] = useState('');
  const [addSong] = useMutation(mutation, {
    onCompleted(data) {
      if (data) return history.push('/');
    },
    refetchQueries: [{ query: query }],
  });
  let history = useHistory();

  useEffect(() => {}, []);

  const onSubmit = (e) => {
    e.preventDefault();
    addSong({
      variables: { title: title },
    });
  };

  return (
    <div>
      <Link to='/'>Back</Link>
      <h3>Create a new song!</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <label>Song Title:</label>
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
      </form>
    </div>
  );
};

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default SongCreate;
