import React, { Component, Fragment } from 'react'
import Modal from 'react-responsive-modal'
import { Toggle } from 'react-powerplug'

class ModalWrapper extends Component {
  render() {
    return (
      <Toggle initial={false}>
        {({ on, toggle }) => (
          <Fragment>
            {this.props.children({ toggle })}
            <Modal open={on} onClose={toggle} center showCloseIcon={false}>
              {this.props.activeModal}
            </Modal>
          </Fragment>
        )}
      </Toggle>
    )
  }
}

export default ModalWrapper

// const ModalConductor = props => {
//   switch (props.currentModal) {
//     case 'EXPORT_DATA':
//       return <ExportDataModal {...props} />

//     case 'SOCIAL_SIGN_IN':
//       return <SignInModal {...props} />

//     case 'FEEDBACK':
//       return <FeedbackModal {...props} />

//     case 'EDIT_BOX':
//       return <BoxDetailsModal {...props} />

//     default:
//       return null
//   }
// }

// export default ModalConductor
