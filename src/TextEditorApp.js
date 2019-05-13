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
      currentDocKey: 0,
      editorState: EditorState.createEmpty(),
      savedDocs: [],
      nextDocKey: 0
    };
    this.onChange = (editorState) => this.setState({editorState});

    this.toggleModal = this.toggleModal.bind(this);
    this.saveDoc = this.saveDoc.bind(this);
    this.loadDoc = this.loadDoc.bind(this);
    this.deleteDoc = this.deleteDoc.bind(this);
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
      doc.key = this.state.nextDocKey;
      const savedDocs = this.state.savedDocs;
      savedDocs.push(doc);
      this.setState({savedDocs});
      this.setState({currentTitle: 'Untitled'});
      this.setState({currentDocKey: null});
      this.setState({editorState: EditorState.createEmpty()});
      this.setState(prevState => ({nextDocKey: prevState.nextDocKey + 1}));
      this.toggleModal();
    }
  }

  loadDoc(doc) {
    this.setState({currentTitle: doc.title});
    this.setState({currentDocKey: doc.key})
    this.setState({editorState: EditorState.createWithContent(doc.content)});
  }

  deleteDoc(docKey) {
    let savedDocs = this.state.savedDocs;
    for (let i in savedDocs) {
      if (savedDocs[i].key === docKey) {
        savedDocs.splice(i,1);
      }
    }
    this.setState({savedDocs});
    this.setState({editorState: EditorState.createEmpty()});
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="mt-4 text-center">
            <Col>
              <h2 style={{fontVariant: 'small-caps'}}>Text Editor</h2>
            </Col>
          </Row>
          <Row>
            <Col xs="8">
              <EditorCell editorState={this.state.editorState} onChange={this.onChange} />
            </Col>
            <Col xs="4" className="mt-5 text-center" style={{display: 'flex', alignItems: 'center'}}>
              <SaveButton onClick={this.toggleModal} />
            </Col>
            <Col xs="4 mt-5">
              <SavedDocs savedDocs={this.state.savedDocs}
                      
                         loadDoc={this.loadDoc}
                         deleteDoc={this.deleteDoc}
                         currentDocKey={this.state.currentDocKey} 
              />
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

