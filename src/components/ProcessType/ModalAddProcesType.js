import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProcessTypeTable from '../ProcessType/ProcessTypeTable'
import { getProcessTypes } from '../../actions/processTypeActions'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import AddProcessType from '../ProcessType/AddProcessType'
// import ProcessTypeList from "../Containers/ProcessTypeList";
class ModalAddProcessType extends Component {
  constructor() {
    super()

    this.state = {
      show: false,
    }
  }
  handleModal(stanje) {
    this.setState({ show: this.state.show })
  }

  handleClose = () => {
    this.props.handleClose()
  }

  render() {
    const show = this.props.show
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-auto">
              <Modal
                show={this.props.show}
                centered
                onHide={() => {
                  this.handleModal()
                }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Create new Process Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AddProcessType />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.props.handleClose}>Close</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalAddProcessType
