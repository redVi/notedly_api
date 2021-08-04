import { gql } from '@apollo/client'

export const NEW_NOTE = gql`
  mutation createNote($content: String!) {
    createNote(content: $content) {
      id
      content
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        id
        username
      }
    }
  }
`
