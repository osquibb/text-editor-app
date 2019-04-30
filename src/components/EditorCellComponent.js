import React, { Component, Fragment } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import { Container, Row, Col, Button } from 'reactstrap';
import 'draft-js/dist/Draft.css'

export default class EditorCell extends Component {
  constructor(props) {
    super(props);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onBoldClick(e) {
    this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'BOLD'));
    e.preventDefault();
  }

  _onItalicClick(e) {
    this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'ITALIC'));
    e.preventDefault();
  }

  _onUnderlineClick(e) {
    this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'UNDERLINE'));
    e.preventDefault();
  }

  render() {

    const currentStyles = this.props.editorState.getCurrentInlineStyle();

    return (
      <Container>
        <Row>
          <Col xs="2" style={{marginLeft: "-4%"}}>
            <Button color="none" 
                    className={currentStyles.has('BOLD') ? "text-info font-weight-bold" : "text-info font-weight-light"} 
                    block 
                    onMouseDown={this._onBoldClick.bind(this)}>
              Bold
            </Button>
          </Col>
          <Col xs="2" className="ml-2 mr-2">
            <Button color="none" 
                    block 
                    className={currentStyles.has('ITALIC') ? "text-info font-italic" : "text-info font-weight-light"} 
                    onMouseDown={this._onItalicClick.bind(this)}>
              Italic
            </Button>
          </Col>
          <Col xs="2">
            <Button color="none" 
                    block 
                    className="text-info font-weight-light"
                    onMouseDown={this._onUnderlineClick.bind(this)}>
              {currentStyles.has('UNDERLINE') ? <u>Underline</u> : "Underline"}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs="12" style={{height: "160px", border: "1px solid #e8e8e8"}}>
            <Editor
              placeholder="Type away..."
              editorState={this.props.editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.props.onChange}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}