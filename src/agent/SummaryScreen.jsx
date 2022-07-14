import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AgentNavbar from '../components/AgentNavbar'
import Criteria from '../components/Criteria'

function SummaryScreen() {
  return (
    <div>
        <AgentNavbar/>
        <div className="summary">
        <Container>
            <Row>
                <Col md={8} className='summary-left'>
                    <Row className='summary-left-1'>
                        <h1>Summary</h1> 
                    </Row>

                    <Row className='summary-left-2'>
                        <h1>Overall Availability</h1> 
                    </Row>

                    <Row className='summary-left-3'>
                        <h1>Group</h1> 
                    </Row>
                  
                </Col>
                <Col md={4}>
                   <Row className='summary-right-1'>
                        <Container>
                            <h1>USD 554.60</h1>
                            <input type="text" placeholder='Primary Guest Name'/>
                            <button className='summary-right-book'>
                                Book now
                            </button>
                            <button className='summary-right-quote'>
                                Get Quote
                            </button>
                        </Container>
                   </Row>
                   
                   <Row className='summary-right-criteria'>
                    <Criteria/>
                   </Row>
                 
                </Col>
            </Row>
        </Container>
        </div>
    </div>
  )
}

export default SummaryScreen