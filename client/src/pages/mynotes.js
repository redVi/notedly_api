import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_MY_NOTES } from '../gql/queries/me'
import NoteFeed from '../components/NoteFeed'

const MyNotes = () => {
  const { loading, error, data } = useQuery(GET_MY_NOTES)

  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>
  if (!data.me.notes.length) return <p>No notes yet</p>

  return <NoteFeed notes={data.me.notes} />
}

export default MyNotes
