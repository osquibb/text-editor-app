import React, { Component } from 'react';
import { Button, Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';

function SavedDocsList(props) {
  return props.savedDocs.map(doc => {
    return(
      <ListGroupItem key={doc.title}
                     onClick={() => props.loadDoc(doc)}
                     style={{borderRadius: "0px", border: "1px solid #e8e8e8"}}>
        <i onClick={() => props.deleteDoc(doc)} className="fa fa-trash text-secondary mr-3"></i>
        {doc.title}
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
            />
          </ListGroup>
        </Row>
      </Container>
    );
  }

}
