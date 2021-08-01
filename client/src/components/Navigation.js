import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  padding: 1em;
  background: #f5f4f0;
  @media (max-width: 700px) {
    padding-top: 64px;
  }
  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
  }
  a:visited { color: #333; }
  a:hover,  a:focus { color: #0077cc; }
`;

const data = [
  { url: '/', id: 1, name: 'Home' },
  { url: '/favorites', id: 2, name: 'Favorites' },
  { url: '/mynotes', id: 3, name: 'My notes' }
]

const Navigation = () => (
  <Nav>
    <NavList>
      {data.map(({ id, name, url }) => (
        <li key={id}>
          <Link to={url}>{name}</Link>
        </li>
      ))}
    </NavList>
  </Nav>
)

export default Navigation
