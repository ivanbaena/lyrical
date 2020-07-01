import React, { useEffect, useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const SongCreate = (props) => {
  const [title, setTitle] = useState('');
  const [addSong, { data }] = useMutation(mutation);

  useEffect(() => {}, []);

  const onSubmit = (e) => {
    e.preventDefault();
    addSong({ variables: { title: title } });
    setTitle('');
    console.log(props);
  };

  return (
    <div>
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
