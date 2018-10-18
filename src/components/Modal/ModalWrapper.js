import React, { Component, Fragment } from 'react'
import Modal from 'react-responsive-modal'
import { Toggle } from 'react-powerplug'
import { Mutation, Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import LogInModal from '../LogInModal'
import CreatePostModal from '../CreatePostModal'

const ModalWrapper = ({ children }) => (
  <Mutation mutation={CLOSE_MODAL_MUTATION}>
    {closeModalMutation => (
      <Modal open={true} onClose={closeModalMutation} center>
        {children}
      </Modal>
    )}
  </Mutation>
)

export default ModalWrapper

const CLOSE_MODAL_MUTATION = gql`
  mutation CLOSE_MODAL_MUTATION {
    closeModal @client {
      currentModal
    }
  }
`

// const ModalWrapper = ({ currentModal, children }) => (
//   <Mutation mutation={OPEN_MODAL_MUTATION} variables={{ currentModal }}>
//     {openModalMutation => children(openModalMutation)}
//   </Mutation>
// )

// const OPEN_MODAL_MUTATION = gql`
//   mutation OPEN_MODAL_MUTATION($currentModal: String!) {
//     openModal(currentModal: $currentModal) @client {
//       currentModal
//     }
//   }
// `
