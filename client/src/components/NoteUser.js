import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_ME } from '../gql/queries'

const NoteUser = ({ note }) => {
  const { loading, error, data } = useQuery(GET_ME)

  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>

  return (
    <Fragment>
      <em>Favorites: {note.favoriteCount}</em><br />
      {data.me.id === note.author.id && (
        <Fragment>
          <Link to={`/edit/${note.id}`}>Edit</Link>
        </Fragment>
      )}
    </Fragment>
  )
}

export default NoteUser
