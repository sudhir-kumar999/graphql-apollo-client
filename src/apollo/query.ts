import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUser {
    getUser {
      success
      message
      user {
        name
        id
        email
      }
    }
  }
`;

export const GET_POSTS = gql`
  query getPostData {
    getPostData {
      success
      message
      posts {
        id
        title
        content
        slug
      }
    }
  }
`;

export const GET_ME=gql`
query getMe{
    getMe{
        id
        name
        email
    }
}
`