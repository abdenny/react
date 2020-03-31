import React, { Component } from 'react';
import Parent from './components/exercise1/Parent';
import Parent2 from './components/exercise2/Parent';
import SimpleList from './components/SimpleList';
import SimpleDropdown from './components/SimpleDropdown';
import { Container, Row, Col } from 'react-bootstrap';
import moduleName from './components/Drop';

let daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            {/* <Parent /> */}
            {/* 
        <Parent2 />
        <SimpleList /> */}
            <SimpleDropdown days={daysOfWeek} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
