import React, { Component } from 'react';
import {Editor, RichUtils} from 'draft-js';
import { Container, Row, Col } from 'reactstrap';
import 'draft-js/dist/Draft.css'

export default class EditorCell extends Component {
  constructor(props) {
    super(props);
    this.state = {editorHover: false};
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.props.onChange(newState);
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
        <Row className="mt-3">
          <Col xs="3">
            <button className='format-button'
                    onMouseDown={this._onBoldClick.bind(this)}
                    style= {{backgroundColor: currentStyles.has('BOLD') ? "#FFFBC7" : null}}
            >
              Bold
            </button>
          </Col>
          <Col xs="3" className="ml-2 mr-2">
            <button className="format-button"
                    onMouseDown={this._onItalicClick.bind(this)}
                    style= {{backgroundColor: currentStyles.has('ITALIC') ? "#FFFBC7" : null}}
            >
              Italic
            </button>
          </Col>
          <Col xs="3" >
            <button className="format-button"
                    onMouseDown={this._onUnderlineClick.bind(this)}
                    style= {{backgroundColor: currentStyles.has('UNDERLINE') ? "#FFFBC7" : null}}
            >
              Underline
            </button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs="12" onClick={() => this.editor.focus()}
                       style={{minHeight: "160px", 
                               border: "1px solid #1A163D",
                               backgroundColor: 'white',
                               padding: '5px 8px',
                               boxShadow: '3px 3px #1A163D',
                               cursor: 'text'
                              }}>
            <Editor
              className='editor-cell'
              ref={editor => this.editor = editor}
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