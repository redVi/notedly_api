import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './home'
import Favorites from './favorites'
import MyNotes from './mynotes'
import NotePage from './note'
import Layout from '../components/Layout'

const Pages = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/mynote" component={MyNotes} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/note/:id" component={NotePage} />
    </Layout>
  </Router>
)

export default Pages
