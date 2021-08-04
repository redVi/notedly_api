import { makeVar, gql } from '@apollo/client'

export const isLoggedInVar = makeVar(!!localStorage.getItem('token'))
export const IS_LOGGED_IN = gql`
  query { isLoggedIn }
`
