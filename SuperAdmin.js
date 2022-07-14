import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function SuperAdmin() {
  return (
    <div className='superadmin'>
            <div className='superadmin-nav'>
             <div className='superadmin-top'>
                 <Col className='superadmin-bg' md={3}>                
                        <img src="../assets/image/logo-white.png" alt="" />                   
                 </Col>
                 <Col className='superadmin-bg2 d-flex' md={9}>  
                      <div>
                      <h1>update user</h1>  
                     </div>   
                     <div>
                      <h1>update user</h1>  
                     </div>           
                     <div>
                      <h1>update user</h1>  
                     </div>   
                                   
                      
                  </Col>        
             </div>
             </div>
             <Row className='superadmin-2'> 
              <Col md={3}>
                 <div className='superadmin-active'>
                    <h2 >User Details</h2>
                 </div>
                 <div>
                    <h2>User Details</h2>
                 </div>
                 <div>
                     <h2>Update Booking</h2>
                 </div>
              </Col>
                 
                 <Col>
                    <h3>3500 <br /> <span>Users</span> </h3>
                 </Col>
                 <Col>
                 <h3>3500 <br /> <span>Users</span></h3>
                 </Col>
                 <Col>
                 <h3>3500 <br /><span>Users</span></h3>
                 </Col>
                 <Col md={2}>
                    
                 </Col>
                 
             </Row>

             <Row className='superadmin-2'> 
              <Col >
                 <div>
                   
                 </div>   
              </Col>
                 
                 <Col>
                    <h3>3500 <br /> <span>Users</span></h3>
                 </Col>
                 <Col>
                 <h3>3500 <br /> <span>Users</span></h3>
                 </Col>
                 <Col>
                 <h3>3500 <br /> <span>Users</span></h3>
                 </Col>
                 <Col md={2}>
                    
                 </Col>
                 
             </Row>
      
             
    
    </div>
  )
}

export default SuperAdmin