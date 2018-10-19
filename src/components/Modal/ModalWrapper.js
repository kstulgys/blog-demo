import React, { Component, Fragment } from 'react'
import { Modal, Button, Form, Icon, Input, Checkbox } from 'antd'
import { Mutation, Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const ModalWrapper = ({ children }) => (
  <Mutation mutation={CLOSE_MODAL_MUTATION}>
    {closeModalMutation => (
      <Modal
        title="Please log in"
        visible={true}
        footer={null}
        onCancel={closeModalMutation}
      >
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
