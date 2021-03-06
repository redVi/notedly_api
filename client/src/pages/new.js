import React from 'react'
import { useMutation } from '@apollo/client'
import { NEW_NOTE } from '../gql/mutations'
import { GET_NOTES, GET_MY_NOTES } from '../gql/queries'
import NoteForm from '../components/NoteForm'

const NewNote = props => {
  const [createNote, { error, loading }] = useMutation(NEW_NOTE, {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
    onCompleted: response => {
      props.history.push(`/note/${response.createNote.id}`)
    }
  })

  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>

  return <NoteForm action={createNote} />
}

export default NewNote
