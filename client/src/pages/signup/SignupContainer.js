import React from 'react'
import { useMutation } from '@apollo/client'
import { SIGN_UP } from '../../gql/mutations/signup'
import { isLoggedInVar } from '../../gql/cache'

export const SignupContainer = ({ history, render }) => {
  const [signUp, { loading, error }] = useMutation(SIGN_UP, {
    onCompleted: data => {
      localStorage.setItem('token', data.signUp)
      isLoggedInVar(true)
      history.push('/')
    }
  })

  const handleSubmit = (event, values) => {
    event.preventDefault()
    signUp({ variables: { ...values } })
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <React.Fragment>
      {render(handleSubmit)}
    </React.Fragment>
  )
}
