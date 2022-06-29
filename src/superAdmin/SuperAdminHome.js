import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function SuperAdminHome() {
  return (
    <div>
        <div className='superAdminHome d-flex'> 
           <Col md={2} className='superAdminHome-side'>
             <img src='../assets/image/logo-white.png'/>          
                 <h2 >User Details</h2>                      
                 <h2 >User Details</h2>            
                 <h2 >User Details</h2>      
          
              
           </Col>
           <Col md={10} className='superAdminHome-Top'>
             <h1>update user</h1>  
             <h1>update user</h1>
             <h1>update user</h1>
             
           </Col>
           <Col>
            <h3>3500 <br /> <span>Users</span> </h3>
             <h3>3500 <br /> <span>Users</span> </h3>
             <h3>3500 <br /> <span>Users</span> </h3>  
           </Col>
           
        
        </div>
       
       
    </div>
  )
}

export default SuperAdminHome