import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import Pages from './pages'
import GlobalStyle from './components/GlobalStyle'

const App = () => (
  <div>
    <GlobalStyle />
    <Pages />
  </div>
)

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
