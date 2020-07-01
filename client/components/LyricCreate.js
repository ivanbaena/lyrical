import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const LyricCreate = ({ songId }) => {
  const [lyric, setLyric] = useState('');
  const [addLyricToSong] = useMutation(mutation);

  const onSubmit = (e) => {
    e.preventDefault();
    addLyricToSong({ variables: { content: lyric, songId } });
    setLyric('');
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label>Add a Lyric</label>
      <input onChange={(e) => setLyric(e.target.value)} value={lyric} />
    </form>
  );
};

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
        id
        likes
      }
    }
  }
`;

export default LyricCreate;
