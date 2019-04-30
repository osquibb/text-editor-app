import React, { Component, Fragment } from 'react';
import { EditorState } from 'draft-js';
import EditorCell from './components/EditorCellComponent';
import SaveButton from './components/SaveButtonComponent';
import SavedDocs from './components/SavedDocsComponent';
import { Input, Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, Row, Col } from 'reactstrap';

export default class TextEditorApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      currentTitle: 'Untitled',
      editorState: EditorState.createEmpty(),
      savedDocs: []
    };
    this.onChange = (editorState) => this.setState({editorState});
    this.toggleModal = this.toggleModal.bind(this);
    this.saveDoc = this.saveDoc.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  saveDoc() {
    if (this.state.savedDocs.length >= 10) {
      alert("Max Saved Docs: 10")
      this.toggleModal();
    } else {
      const doc = {};
      doc.title = this.state.currentTitle;
      doc.content = this.state.editorState.getCurrentContent();
      const savedDocs = this.state.savedDocs;
      savedDocs.push(doc);
      this.setState({savedDocs});
      this.setState({currentTitle: 'Untitled'});
      this.setState({editorState: EditorState.createEmpty()})
      this.toggleModal();
    }
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col xs="6">
              <EditorCell editorState={this.state.editorState} onChange={this.onChange} />
            </Col>
            <Col xs="2" className="mt-5 text-center">
              <SaveButton onClick={this.toggleModal} />
            </Col>
            <Col xs="4">
              <SavedDocs savedDocs={this.state.savedDocs} />
            </Col>
          </Row>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader className="text-muted" toggle={this.toggleModal}>Title?</ModalHeader>
          <ModalBody>
            <Input value={this.state.currentTitle} onChange={e => {this.setState({currentTitle: e.target.value})}}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" outline onClick={this.saveDoc}>Save</Button>{' '}
            <Button color="secondary" outline onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

