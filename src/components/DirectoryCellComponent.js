import React, { Component, Fragment } from 'react';
import { Button, Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';

export default class DirectoryCell extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <Container>
        <Row>
          <Col style={{marginLeft: "-7%"}}>
            <Button disabled color="none" className="font-weight-light">Saved</Button>
          </Col>
        </Row>
        <Row>
          <ListGroup style={{width: "100%"}}>
            <ListGroupItem tag="a" href="#" style={{borderRadius: "0px", border: "1px solid #e8e8e8"}}>doc</ListGroupItem>
            <ListGroupItem tag="a" href="#" style={{borderRadius: "0px", border: "1px solid #e8e8e8"}}>doc</ListGroupItem>
            <ListGroupItem tag="a" href="#" style={{borderRadius: "0px", border: "1px solid #e8e8e8"}}>doc</ListGroupItem>
          </ListGroup>
        </Row>
      </Container>
    );
  }

}
