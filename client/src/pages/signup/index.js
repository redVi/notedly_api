import React from 'react'
import { SignupContainer } from './SignupContainer'
import UserForm from '../../components/UserForm'

const SignupPage = ({ history }) => (
  <SignupContainer history={history} render={(onChange, handleSubmit) =>
    <UserForm formType="signup" handleSubmit={handleSubmit} />
  } />
)

export default SignupPage
