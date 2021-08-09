import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { useQuery } from '@apollo/client'
import { IS_LOGGED_IN } from '../../gql/cache'
import * as s from './NoteStyle'
import NoteUser from '../NoteUser'

const Note = ({ note }) => {
  const { loading, error } = useQuery(IS_LOGGED_IN)
  const { author, createdAt, content, id } = note
  const createdDate = format(new Date(createdAt), 'MMM Do yyyy')

  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>

  return (
    <s.StyledNote>
      <s.MetaData>
        <s.MetaInfo>
          <Link to={`/note/${id}`}>
            <img src={author.avatar} alt={author.username} height='100px' />
          </Link>
        </s.MetaInfo>
        <s.MetaInfo>
          <em>by</em> {author.username} <br />
          {createdDate}
        </s.MetaInfo>
        <s.UserActions>
          <NoteUser note={note} />
        </s.UserActions>
      </s.MetaData>
      <ReactMarkdown children={content} />
    </s.StyledNote>
  )
}

export default Note
