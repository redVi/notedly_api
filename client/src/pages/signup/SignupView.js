import React from 'react'
import Button from '../../components/Button'
import { SignupInput } from './SignupInput'
import * as s from './SignupStyles'

export const SignupView = ({ handleSubmit, onChange }) => (
  <s.Wrapper>
    <s.Form onSubmit={handleSubmit} action="">
      <SignupInput
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        label="Username"
        onChange={onChange}
      />

      <SignupInput
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        label="Email"
        onChange={onChange}
      />

      <SignupInput
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        label="Password"
        onChange={onChange}
      />

      <Button type="submit">Submit</Button>
    </s.Form>
  </s.Wrapper>
)
