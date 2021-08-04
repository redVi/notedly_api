import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { IS_LOGGED_IN, isLoggedInVar } from '../../gql/cache'
import logo from '../../img/logo.png'
import * as s from './HeaderStyle'
import ButtonAsLink from '../ButtonAsLink'

const clearStore = (client, history) => {
  localStorage.removeItem('token')
  client.resetStore()
  isLoggedInVar(false)
  history.push('/')
}

const Header = ({ children, history }) => {
  const { data, client } = useQuery(IS_LOGGED_IN)
  const clearStoreAfterLogout = () => clearStore(client, history)

  return (
    <s.HeaderBar>
      <img src={logo} alt="Company logo" height={40} />
      <s.LogoText>Notedly</s.LogoText>
      <s.UserState>
        {data.isLoggedIn ? (
          <ButtonAsLink onClick={clearStoreAfterLogout}>Logout</ButtonAsLink>
        ): (
          <p>
            <Link to="/signup">Sign up</Link> or {' '}
            <Link to="/signin">Sign in</Link>
          </p>
        )}
      </s.UserState>
      {children}
    </s.HeaderBar>
  )
}

export default withRouter(Header)
