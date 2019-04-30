import React, { Component, Fragment } from 'react';
import { Button, Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';

export default class SavedDocs extends Component {

  render() {

    const savedDocsList = this.props.savedDocs.map(doc => {
      return(
        <ListGroupItem tag="a" 
                       href="#" 
                       style={{borderRadius: "0px", border: "1px solid #e8e8e8"}}>
          {doc.title}
        </ListGroupItem>
      );
    });

    return(
      <Container>
        <Row>
          <Col style={{marginLeft: "-7%"}}>
            <Button disabled hidden={this.props.savedDocs.length == 0} color="none" className="font-weight-light">Saved</Button>
          </Col>
        </Row>
        <Row>
          <ListGroup style={{width: "100%"}}>
            {savedDocsList}
          </ListGroup>
        </Row>
      </Container>
    );
  }

}
