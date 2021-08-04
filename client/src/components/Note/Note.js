import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import * as s from './NoteStyle'

const Note = ({ note }) => {
  const { author, createdAt, favoriteCount, content, id } = note
  const createdDate = format(new Date(createdAt), 'MMM Do yyyy')

  return (
    <s.StyledNote>
      <s.MetaData>
        <s.MetaInfo>
          <Link to={`/note/${id}`}>
            <img src={author.avatar} alt={author.username} height="100px" />
          </Link>
        </s.MetaInfo>
        <s.MetaInfo>
          <em>by</em> {author.username} <br/>
          {createdDate}
        </s.MetaInfo>
        <s.UserActions>
          <em>Favorites:</em>  {favoriteCount}
        </s.UserActions>
      </s.MetaData>
      <ReactMarkdown children={content} />
    </s.StyledNote>
  );
}

export default Note
