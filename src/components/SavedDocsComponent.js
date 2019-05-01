import React, { Component } from 'react';
import { Button, Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';

function SavedDocsList(props) {
  return props.savedDocs.map(doc => {
    return(
      <ListGroupItem key={doc.key}
                     style={{borderRadius: "0px", border: "1px solid #e8e8e8"}}>
        <i onClick={() => props.deleteDoc(doc.key)} className="fa fa-trash text-secondary mr-3"></i>
        <span className={doc.key === props.currentDocKey ? "font-weight-bold" : null } onClick={() => props.loadDoc(doc)}>{doc.title}</span>
      </ListGroupItem>
    );
  });
}

export default class SavedDocs extends Component {

  render() {
    return(
      <Container>
        <Row>
          <Col style={{marginLeft: "-7%"}}>
            <Button disabled hidden={this.props.savedDocs.length === 0} color="none" className="font-weight-light">Saved</Button>
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
