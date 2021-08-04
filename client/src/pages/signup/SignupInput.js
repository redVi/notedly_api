import React from 'react'

export const SignupInput = ({ label, name, id, type, placeholder, onChange }) => (
  <React.Fragment>
    <label htmlFor="username">{label}: </label>
    <input
      required
      autoComplete="off"
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  </React.Fragment>
)
