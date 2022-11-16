import React from 'react'
import Counter from '../Components/Counter'
import { Row, Col, Container } from 'react-bootstrap'
import Navigation from '../Components/Navigation'

const Widgetscreen = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <div id='counter'>
          <Row>
            <h4>Simple Counter:</h4>
          </Row>
          <Row>
            <Col>
              <Counter />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Widgetscreen
