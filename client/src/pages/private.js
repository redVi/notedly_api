import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { IS_LOGGED_IN } from '../gql/cache'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN)

  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>

  return (
    <Route
      {...rest}
      render={props =>
        data.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: '/signin',
            state: { from: props.location }
          }} />
        )
      }
    />
  )
}

export default PrivateRoute
