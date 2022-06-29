import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'

function AgentSearchScreen() {
    const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());

  console.log(selectedDate)
  return (
    <div>
      <div className='admin-nav'>
        <Container>
           <Row>
               <Col className='admin-logo'>
               <Link to="/">    
                <img src="../assets/image/log3.png" alt="" />
               </Link>
               </Col>
           </Row>
        </Container>
      </div>


      <div className="agent-search">
        <Container>
            <Row>
                <Col className='agent-search-left'>
                   
                </Col>
                <Col className='agent-search-right'>
                   <Row>
                    <h1>SEARCH HOTELS</h1>
                    <h2>Get the best deals available in the Indian Ocean.</h2>
                   </Row>
                   <Row>
                      <select
                        name="location"
                        id="location"
                        required
                        // onChange={(e) => setLocation(e.target.value)}
                        >
                         <option value="not selected">Select destination or hotel name</option>
                         <option value="kerala">Kerala</option>
                         <option value="maldives">Maldives</option>
                         <option value="jammu">Jammu</option>
                        </select>
                   </Row>
                   <Row className='agent-search-date'>
                    <input type="date" placeholder="dd-mm-yyyy" onChange={(e)=> setSelectedDate(e.target.value)}
                    />
                     <input style={{marginLeft:'23px'}} type="date" placeholder="dd-mm-yyyy" onChange={(e)=> setSelectedDate2(e.target.value)}
                    />
                       {/* <DatePicker 
                       selected={selectedDate} 
                       required
                       dateFormat="MM/dd/yyyy"  
                       onChange={date=> setSelectedDate(date)}
                       minDate={new Date()}/> */}
                  
                   </Row>
                   <Row className='agent-search-destination'>
                   <select
                        name="location"
                        id="location"
                        required
                        // onChange={(e) => setLocation(e.target.value)}
                        >
                         <option value="not selected">Select Nationality</option>
                         <option value="kerala">Kerala</option>
                         <option value="maldives">Maldives</option>
                         <option value="jammu">Jammu</option>
                        </select>

                        <select
                        style={{marginLeft:'23px'}}
                        name="location"
                        id="location"
                        required
                        // onChange={(e) => setLocation(e.target.value)}
                        >
                         <option value="not selected">Select holiday type</option>
                         <option value="kerala">Kerala</option>
                         <option value="maldives">Maldives</option>
                         <option value="jammu">Jammu</option>
                        </select>
                   </Row>
                   <Row className='agent-search-button'>
                   <select
                        name="location"
                        id="location"
                        required
                        // onChange={(e) => setLocation(e.target.value)}
                        >
                         <option value="not selected">Select Nationality</option>
                         <option value="kerala">Kerala</option>
                         <option value="maldives">Maldives</option>
                         <option value="jammu">Jammu</option>
                        </select>

                        <button
                        style={{marginLeft:'23px'}}
                       
                        >
                     Search
                    
                        </button>
                   </Row>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default AgentSearchScreen