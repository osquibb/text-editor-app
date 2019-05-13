import React, { Component } from 'react';
import { Button, Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';

class SavedDocsList extends Component {

  render() {
    return this.props.savedDocs.map(doc => {
      return(
        <ListGroupItem key={doc.key}
                       style={{borderRadius: "0px", border: "1px solid #1A163D", margin: '3px', cursor: 'pointer'}}>
          <i onClick={() => this.props.deleteDoc(doc.key)} className="fa fa-trash text-secondary mr-3"></i>
          <span className={doc.key === this.props.currentDocKey ? "font-weight-bold" : null } onClick={() => this.props.loadDoc(doc)}>{doc.title}</span>
        </ListGroupItem>
      );
    });
  }
}

export default class SavedDocs extends Component {

  render() {
    return(
      <Container>
        <Row>
          <Col>
            <h5 style={{fontVariant: 'small-caps'}} hidden={this.props.savedDocs.length === 0}>Saved</h5>
          </Col>
        </Row>
        <Row>
          <ListGroup style={{width: "100%"}}>
            <SavedDocsList savedDocs={this.props.savedDocs} 
                           loadDoc={this.props.loadDoc}
                           deleteDoc={this.props.deleteDoc}
                           currentDocKey={this.props.currentDocKey}
            />
          </ListGroup>
        </Row>
      </Container>
    );
  }

}
