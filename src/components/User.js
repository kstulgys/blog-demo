import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

export const User = props => (
  <Query query={ME_QUERY}>
    {({ data, loading, error }) => {
      console.log(data)
      return props.children({ data, loading })
    }}
  </Query>
)

export const ME_QUERY = gql`
  query ME_QUERY {
    me {
      id
      email
      name
      posts {
        id
        title
        text
      }
      bookmarks {
        id
        post {
          title
          text
          id
        }
      }
    }
  }
`
