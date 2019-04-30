import React from 'react';
import EditorCell from './components/EditorCellComponent';
import SaveButton from './components/SaveButtonComponent';

import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col xs="7">
          <EditorCell />
        </Col>
        <Col xs="1" className="mt-5">
          <SaveButton />
        </Col>
        <Col xs="4">
        </Col>
      </Row>
    </Container>
  );
}

export default App;
