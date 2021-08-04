import React from 'react'
import { SignupContainer } from './SignupContainer'
import { SignupView } from './SignupView'

const SignupPage = ({ history }) => (
  <SignupContainer history={history} render={(onChange, handleSubmit) =>
    <SignupView onChange={onChange} handleSubmit={handleSubmit} />
  } />
)

export default SignupPage
