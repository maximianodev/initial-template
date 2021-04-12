import { gql } from 'graphql-request'

const getPosts = gql`
  query MyQuery {
    posts {
      id
      author {
        createdAt
        name
        picture {
          url
        }
      }
      title
      content {
        markdown
      }
    }
  }
`

export { getPosts };