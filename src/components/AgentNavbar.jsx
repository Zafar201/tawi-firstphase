import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AgentNavbar() {
  return (
    <div>
         <div className="agent-nav">
        <Container>
          <Row>
            <Col className="agent-logo">
              <Link to="/">
                <img src="../assets/image/log3.png" alt="" />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default AgentNavbar