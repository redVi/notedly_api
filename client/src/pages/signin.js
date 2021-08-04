import React from 'react'
import { useMutation } from '@apollo/client'
import { isLoggedInVar } from '../gql/cache'
import { SIGN_IN } from '../gql/mutations'
import UserForm from '../components/UserForm'

const SignIn = ({ history }) => {
  const [signIn, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: data => {
      localStorage.setItem('token', data.signIn)
      isLoggedInVar(true)
      history.push('/')
    }
  })

  const handleSubmit = (event, values) => {
    event.preventDefault()
    signIn({ variables: { ...values } })
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return <UserForm handleSubmit={handleSubmit} />
}

export default SignIn
