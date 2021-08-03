import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_NOTES } from '../gql/queries/notes'
import NoteFeed from '../components/NoteFeed'

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES)

  if (loading) return <p>Loading</p>
  if (error) return <p>No has any note</p>

  return <NoteFeed notes={data.noteFeed.notes} />
}

export default Home
