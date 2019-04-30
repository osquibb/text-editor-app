import React, { Component, Fragment } from 'react';
import EditorCell from './components/EditorCellComponent';
import SaveButton from './components/SaveButtonComponent';
import DirectoryCell from './components/DirectoryCellComponent';

import { Input, Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, Row, Col } from 'reactstrap';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      currentTitle: 'Untitled'
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col xs="6">
              <EditorCell />
            </Col>
            <Col xs="2" className="mt-5 text-center">
              <SaveButton onClick={this.toggleModal} />
            </Col>
            <Col xs="4">
              <DirectoryCell />
            </Col>
          </Row>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader className="text-muted" toggle={this.toggleModal}>Title?</ModalHeader>
          <ModalBody>
            <Input placeholder={this.state.currentTitle}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" outline onClick={this.toggleModal}>Save</Button>{' '}
            <Button color="secondary" outline onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

