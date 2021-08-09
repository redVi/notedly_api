import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { EDIT_NOTE } from '../gql/mutations'
import { GET_NOTE, GET_ME } from '../gql/queries'
import NoteForm from '../components/NoteForm'

const EditNotePage = ({ history }) => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } })
  const { loading: userLoading, error: userError, data: userData } = useQuery(GET_ME)
  const [editNote] = useMutation(EDIT_NOTE, {
    variables: {
      id
    },
    onCompleted: () => {
      history.push(`/note/${id}`)
    }
  })

  if (loading || userLoading) return <p>Loading...</p>
  if (error || userError) return <p>Note not found</p>
  if (userData.me.id !== data.note.author.id) return <p>You do not have access to edit this note</p>

  return <NoteForm content={data.note.content} action={editNote} />
}

export default EditNotePage
