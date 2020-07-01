import { gql } from 'apollo-boost';

export default gql`
  query songQuery($id: ID!) {
    song(id: $id) {
      title
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
