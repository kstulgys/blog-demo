import React, { Component, Fragment } from 'react'
import Modal from 'react-responsive-modal'
import { Toggle } from 'react-powerplug'
import { Mutation, Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import LogInModal from '../LogInModal'
import CreatePostModal from '../CreatePostModal'

const ModalConductor = props => {
  return (
    <Query query={GET_ACTIVE_MODAL}>
      {({ data: { activeModal: { currentModal } }, loading }) => {
        console.log('currentModal', currentModal)
        switch (currentModal) {
          case 'LOG_IN':
            return <LogInModal {...props} />
          case 'CREATE_POST':
            return <CreatePostModal {...props} />
          default:
            return null
        }
      }}
    </Query>
  )
}

export default ModalConductor

const GET_ACTIVE_MODAL = gql`
  query GET_ACTIVE_MODAL {
    activeModal @client {
      currentModal
    }
  }
`
