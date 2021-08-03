import React from 'react'
import ReactMarkdown from 'react-markdown'
import { format } from 'date-fns'
import * as s from './NoteStyle'

const Note = ({ note }) => {
  const { author, createdAt, favoriteCount, content } = note
  const createdDate = format(new Date(createdAt), 'MMM Do yyyy')

  return (
    <s.StyledNote>
      <s.MetaData>
        <s.MetaInfo>
          <img src={author.avatar} alt={author.username} height="100px" />
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
