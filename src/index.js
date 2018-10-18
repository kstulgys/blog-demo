import React from 'react'
import ReactDOM from 'react-dom'
import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-client-preset'
import { WebSocketLink } from 'apollo-link-ws'
import { ApolloLink, split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { AUTH_TOKEN } from './constant'
import { ApolloProvider } from 'react-apollo'
import { withClientState } from 'apollo-link-state'
import App from './components/App'
import 'tachyons'
import './index.css'

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const middlewareLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  const tokenValue = localStorage.getItem(AUTH_TOKEN)
  // return the headers to the context so httpLink can read them
  operation.setContext({
    headers: {
      Authorization: tokenValue ? `Bearer ${tokenValue}` : '',
    },
  })
  return forward(operation)
})

// authenticated httplink
const httpLinkAuth = middlewareLink.concat(httpLink)

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000`,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`,
    },
  },
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLinkAuth,
)

const defaults = {
  activeModal: {
    __typename: 'ActiveModal',
    currentModal: null,
  },
}

const resolvers = {
  Mutation: {
    openModal: (_, { currentModal }, { cache }) => {
      cache.writeData({ data: { activeModal: { currentModal } } })
      console.log(currentModal)
    },
    closeModal: (_, args, { cache }) => {
      cache.writeData({ data: { activeModal: { currentModal: null } } })
    },
  },
}

// apollo client setup
const cache = new InMemoryCache()
const stateLink = withClientState({ cache, defaults, resolvers })
const client = new ApolloClient({
  link: ApolloLink.from([stateLink, link]),
  cache,
  connectToDevTools: true,
})

// const token = localStorage.getItem(AUTH_TOKEN)

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)
