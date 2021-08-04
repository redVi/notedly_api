import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  mutation signUp($password: String!, $username: String, $email: String) {
    signIn(password: $password, username: $username, email: $email)
  }
`
