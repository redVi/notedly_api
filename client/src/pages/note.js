import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_NOTE } from '../gql/queries/note'
import Note from '../components/Note'

const NotePage = props => {
  const id = props.match.params.id
  const { loading, error, data } = useQuery(GET_NOTE, { variables: id })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Note not found</p>

  return <Note note={data.note} />
}

export default NotePage
