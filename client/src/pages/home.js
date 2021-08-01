import React from 'react'
import { useQuery } from '@apollo/client'
import ReactMarkdown from 'react-markdown'
import { GET_NOTES } from '../gql/queries/notes'

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES)

  if (loading) return <p>Loading</p>
  if (error) return <p>No has any note</p>

  return (
    <section>
      {data.noteFeed.notes.map(note => (
        <article key={note.id}>
          <img
            src={note.author.avatar}
            alt={`${note.author.username} avatar`}
            height="100px"
          />{' '}
          {note.author.username} {note.createdAt} {note.favoriteCount}{' '}
          <ReactMarkdown children={note.content} />
        </article>
      ))}
    </section>
  )
}

export default Home
