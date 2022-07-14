import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Criteria() {
  return (
    <div>
        <Row className='criteria'>
          <div  className="searchlist-left">
                    <Row className="searchlist-box">
                  
                          <h2>You are searching for</h2>
                     
                        <div>
                          <h1>Hotels in</h1>
                          <p>Maldives</p>
                        </div>
                        <div>
                          <h1>to Accommodate</h1>
                          <p>Maldives</p>
                        </div>
                        <div>
                          <h1>of Nationality</h1>
                          <p>Maldives</p>
                        </div>
                        <div>
                          <h1>for 7 nights stay</h1>
                          <p>Check-in: 30 Jun 2022</p>
                          <p>Check-in: 30 Jun 2022</p>
                        </div>  
                        <button>Update Criteria</button>
                    </Row>
                </div>
                </Row>
    </div>
  )
}

export default Criteria