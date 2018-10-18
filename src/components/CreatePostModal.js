import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import { Mutation, Query } from 'react-apollo'
import { gql } from 'apollo-boost'

class CreatePostModal extends Component {
  render() {
    return (
      <div>
        <Mutation
          mutation={CLOSE_MODAL_MUTATION}
          variables={{
            currentModal: '',
          }}
        >
          {closeModalMutation => (
            <Modal open={true} onClose={closeModalMutation} center>
              <h2>Simple create post modal</h2>
            </Modal>
          )}
        </Mutation>
      </div>
    )
  }
}

export default CreatePostModal

const CLOSE_MODAL_MUTATION = gql`
  mutation CLOSE_MODAL_MUTATION($currentModal: String) {
    closeModal(currentModal: $currentModal) @client {
      currentModal
    }
  }
`
