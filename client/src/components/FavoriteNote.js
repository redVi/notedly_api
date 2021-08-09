import React, { Fragment, useState } from 'react'
import { useMutation } from '@apollo/client'
import { TOGGLE_FAVORITE } from '../gql/mutations'
import { GET_FAVORITES, GET_ME } from '../gql/queries'
import ButtonAsLink from './ButtonAsLink'

const FavoriteNote = ({ me, noteId, favoriteCount }) => {
  const [count, setCount] = useState(favoriteCount)
  const [favorited, setFavorited] = useState(me.favorites.filter(note => note.id === noteId).length > 0)

  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: { id: noteId },
    refetchQueries: [{ query: GET_ME }]
  })

  const increaseFavorites = () => {
    setFavorited(true)
    setCount(count + 1)
    toggleFavorite()
  }

  const decreaseFavorites = () => {
    setFavorited(false)
    setCount(count - 1)
    toggleFavorite()
  }

  return (
    <Fragment>
      {favorited ? (
        <ButtonAsLink onClick={decreaseFavorites}>Remove favorite</ButtonAsLink>
      ) : (
        <ButtonAsLink onClick={increaseFavorites}>Add to favorites</ButtonAsLink>
      )}
      &nbsp;<span>{count}</span>
    </Fragment>
  )
}

export default FavoriteNote
