import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'


function HotDeals({show,close}) {
    if(!show){
        return <>
        </>
    }
  return (
    <div>
        <Container> 
        <Row className='popup'>
         <Col md={6}>
         <img src="../assets/image/home2.png" alt="" />
         </Col>
         <Col md={6}>
           <Row className='close'>
               <p onClick={close}>X</p>
           </Row>
           <div>
           <Row className='f-left'>
               <h1>Explore our luxury offers</h1>
           </Row>
           <Row className='f-left'>
               <h2>15% at Ozen</h2>
           </Row>
           <Row className='f-left'>
           <h2>15% at Ozen</h2>
           </Row>
           <Row className='f-left'>
           <h2>15% at Ozen</h2>
           </Row>
           </div>
        </Col>

        
        </Row>
        </Container>
        </div>
  )
}

export default HotDeals