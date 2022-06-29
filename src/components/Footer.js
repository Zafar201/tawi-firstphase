import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='foooter'>
    <Container>
        <Row className='foooter-1'>
           <img src='../assets/image/Asset 20.png'  />

        </Row>
        
        <Row className="about-4-fnt foooter-2">
          <img src="../assets/image/phone.png" alt="" />
           0484-7180465
        </Row>
        <Row className="about-4-fnt foooter-2" style={{paddingBottom:"30px"}}>
          <img src="../assets/image/email.png" alt="" />
          info@tawifacilities.com
        </Row>
       <Row className='foooter-3' >
          <center>    <hr/></center>
          <Col md={{ span: 1, offset: 2 }}>
          <Link to='/'><h3>Home</h3></Link>
          </Col>
          <Col md={1}>
          <Link to='/about'><h3>About </h3></Link>
          </Col>
          <Col md={2}>
          <Link to='/luxury'><h3>Luxury Experience</h3></Link>
          </Col>
          <Col md={2}>
          <Link to='/'>  <h3>Book now</h3></Link>
          </Col>
          <Col md={2}>
          <Link to='/admin'><h3  style={{cursor:"pointer"}}>Login</h3></Link>
          </Col>
          <center>    <hr/></center>
       </Row>  
       <Row>
          <p> SatyaSim Niwas Near Ramavarma <br/>
             High School Cherai Kerala-683514 (India)</p>
       </Row>  
      <Row className='rights'>
        <Col>
           <h4> All Rights
            Reserved @ <Link to='/superadminlogin'> TAWI Facilities 2015–2022. </Link></h4> 
        </Col>
        <Col>
       <a href='https://www.instagram.com/tawi_facilities/?utm_medium=copy_link' > <img src="../assets/image/instagram.png" alt="" /></a>
       <a href='https://www.facebook.com/tawifacilities/' >  <img  src="../assets/image/facebook.png" alt="" /></a>
          {/* <img src="../assets/image/youtube.png" alt="" /> */}
        </Col>
      </Row>   
        
     </Container> 
</div>
  )
}

export default Footer