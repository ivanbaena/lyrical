import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const LyricList = ({ lyrics }) => {
  const [likeLyric] = useMutation(mutation);

  const renderLyrics = (lyricsData) => {
    return lyricsData.map(({ id, content, likes }) => {
      return (
        <li key={id} className='collection-item'>
          {content}
          <div className='vote-box'>
            <i
              className='material-icons'
              onClick={() =>
                likeLyric({
                  variables: { id },
                  optimisticResponse: {
                    __typename: 'Mutation',
                    likeLyric: {
                      id,
                      __typename: 'LyricType',
                      likes: likes + 1,
                    },
                  },
                })
              }
            >
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      );
    });
  };

  return <ul className='collection'>{renderLyrics(lyrics)}</ul>;
};

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default LyricList;
