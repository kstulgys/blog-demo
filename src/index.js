import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { AUTH_TOKEN } from './constant'
import { ApolloProvider } from 'react-apollo'
import App from './components/App'
import client from './client'
import 'tachyons'
import './index.css'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)
