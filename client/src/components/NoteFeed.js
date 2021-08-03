import React from 'react'
import Note from './Note'
import styled from 'styled-components'

const NoteWrapper = styled.article`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;

const NoteFeed = ({ notes }) => (
  <section>
    {notes.map(note => (
      <NoteWrapper key={note.id}>
       <Note note={note} />
      </NoteWrapper>
    ))}
  </section>
)

export default NoteFeed
