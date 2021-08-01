import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <div>
    <h1>Hello</h1>
  </div>
)

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
