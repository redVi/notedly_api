import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { SIGN_UP } from '../../gql/mutations/signup'

export const SignupContainer = ({ history, render }) => {
  const [values, setValues] = useState({})

  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const [signUp, { loading, error }] = useMutation(SIGN_UP, {
    onCompleted: data => {
      localStorage.setItem('token', data.signUp)
      history.push('/')
    }
  })

  const handleSubmit = event => {
    event.preventDefault()
    signUp({ variables: { ...values } })
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <React.Fragment>
      {render(onChange, handleSubmit)}
    </React.Fragment>
  )
}
