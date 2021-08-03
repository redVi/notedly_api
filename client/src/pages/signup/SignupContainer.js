import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { SIGN_UP } from '../../gql/mutations/signup'

export const SignupContainer = props => {
  const [values, setValues] = useState({})

  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const [signUp, { loading, error }] = useMutation(SIGN_UP, {
    onCompleted: data => {
      console.log('data', data.signUp)
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
      {props.render(onChange, handleSubmit)}
    </React.Fragment>
  )
}
