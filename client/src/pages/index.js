import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './home'
import FavoritesPage from './favorites'
import MyNotesPage from './mynotes'
import NotePage from './note'
import SignupPage from './signup'
import SignInPage from './signin'
import Layout from '../components/Layout'
import PrivateRoute from './private'

const Pages = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={HomePage} />
      <PrivateRoute path="/mynotes" component={MyNotesPage} />
      <PrivateRoute path="/favorites" component={FavoritesPage} />
      <Route path="/note/:id" component={NotePage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/signin" component={SignInPage} />
    </Layout>
  </Router>
)

export default Pages
