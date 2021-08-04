import React, { useState } from 'react'
import Button from '../Button'
import { Input } from '../Input'
import * as s from './UserFormStyles'

const UserForm = ({ handleSubmit, formType }) => {
  const [values, setValues] = useState({})
  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  const onSubmit = (event) => {
    handleSubmit(event, values)
  }

  return (
    <s.Wrapper>
      <s.Form onSubmit={onSubmit} action="">
        <Input
          required={true}
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          label="Username"
          onChange={onChange}
        />

        {formType === 'signup' && (
          <Input
            required={true}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            label="Email"
            onChange={onChange}
          />
        )}

        <Input
          required={true}
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
}

export default UserForm
