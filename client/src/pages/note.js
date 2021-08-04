import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { GET_NOTE } from '../gql/queries'
import Note from '../components/Note'

const NotePage = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_NOTE, {
    variables: { id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Note not found</p>

  return <Note note={data.note} />
}

export default NotePage
