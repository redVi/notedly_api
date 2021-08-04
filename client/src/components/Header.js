import React from 'react'
import { Link } from 'react-router-dom'
import { useApolloClient } from '@apollo/client'
import styled from 'styled-components'
import { IS_LOGGED_IN } from '../gql/cache'
import logo from '../img/logo.png'

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

const UserState = styled.div`
  margin-left: auto;
`;

const Header = ({ children }) => {
  const client = useApolloClient()
  const { isLoggedIn } = client.readQuery({ query: IS_LOGGED_IN })

  return (
    <HeaderBar>
      <img src={logo} alt="Company logo" height={40} />
      <LogoText>Notedly</LogoText>
      <UserState>
        {isLoggedIn ? (
          <p>Log out</p>
        ): (
          <p>
            <Link to="/signup">Sign up</Link> or {' '}
            <Link to="/signin">Sign in</Link>
          </p>
        )}
      </UserState>
      {children}
    </HeaderBar>
  )
}

export default Header
