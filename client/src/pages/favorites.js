import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_FAVORITES } from '../gql/queries'
import NoteFeed from '../components/NoteFeed'

const Favorites = () => {
  const { loading, error, data } = useQuery(GET_FAVORITES)

  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>
  if (!data.me.favorites.length) return <p>No notes yet</p>

  return <NoteFeed notes={data.me.favorites} />
}

export default Favorites
