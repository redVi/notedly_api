import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

const Wrapper = styled.div`
  height: 100%;
`;

const Form = styled.form`
  height: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
`;

const NoteForm = ({ content, action }) => {
  const [value, setValue] = useState({ content: content || '' });

  const onChange = event => {
    setValue({ content: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    action({ variables: { ...value } })
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <TextArea
          required
          type="text"
          name="content"
          placeholder="Note Content"
          value={value.content}
          onChange={onChange}
        />
        <Button type="submit">Save</Button>
      </Form>
    </Wrapper>
  )
}

export default NoteForm
