import React from 'react'

export const Input = ({ label, name, id, type, placeholder, required, onChange }) => (
  <React.Fragment>
    <label htmlFor="username">{label}: </label>
    <input
      required={required}
      autoComplete="off"
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  </React.Fragment>
)
