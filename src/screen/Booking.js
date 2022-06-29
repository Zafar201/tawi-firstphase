import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { checkProperty } from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function Booking() {
    const params = useParams();
    const dispatch = useDispatch()
    const checkPropertys= useSelector(state=>state.checkPropertys)
    // const [selectedDate, setSelectedDate] = useState(null);
    const {loading, error, prop}= checkPropertys
    const { adult,child,location,startingDate,endingDate } = params;
    // const newDate = format(startingDate,'2')
    const navigate = useNavigate()


    useEffect(()=>{
      dispatch(checkProperty(location,adult,child,startingDate,endingDate))                       
    
   },[dispatch])

   const truncate=(str,n)=>{
    return str.length>n?str.substr(0,n-1)+ "...." :str
  }
  return (
    <div>
     
      {loading ? <LoadingBox></LoadingBox>:
       error ? <MessageBox>{error}</MessageBox>:(
        <>
       <div
        className="home-container"
        style={{ backgroundImage: `url("/assets/image/61.jpg")`,height:"88vh" }}
      >
       <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container className="nav-pad">
            <Col md={4}>
              <Navbar.Brand className="logo">
              <Link to="/"> <img src="/assets/image/log1.png" alt="" /></Link>
              </Navbar.Brand> 
            </Col>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Col md={4}>
                  <Link to="/">
                    {' '}
                    <Nav.Link href="#deets" className='act'>Home</Nav.Link>{' '}
                  </Link>{' '}
                </Col>
                <Col md={4}>
                  <Link to="/about">
                    {' '}
                    <Nav.Link
                      href="#deets"
                      style={{ color: ' #D9B061 !important;' }}
                    >
                      About Us
                    </Nav.Link>
                  </Link>
                </Col>
                <Col md={6}>
                  <Link to="/luxury">
                    {' '}
                    <Nav.Link
                      href="#deets"
                      style={{ color: ' #D9B061 !important;' }}
                    >
                     Luxury Experience
                    </Nav.Link>
                  </Link>
                </Col>
                <Col md={4}>
                  <Link to="/contact">
                    {' '}
                    <Nav.Link href="#deets">Contact Us</Nav.Link>
                  </Link>
                </Col>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

       
       
         
     
        <Container>
          <Row className="booking-1">
            <h1>Your search result</h1>
            <p>

            </p>

          </Row>
          <Row className='booking-2'>
              <Col md={1} >
                <img src="/assets/image/calender.png" alt="" />
              </Col>
              <Col md={3}>
                <h2>{startingDate} - {endingDate}</h2>
              </Col>       
          </Row>

        </Container>


      </div>
      <div className='mttop'>
      {prop.map((itm)=>(
       <div key={itm._id} className='home-card card-2'>     
        <Container className="home-3">
          <Row>
            <Col style={{ padding: '0px' }} md={3} className="home-3-img">
              <img src={itm.images.length !== 0 && itm.images[0].location } alt="" />
            </Col>
            <Col>
              <Container>
                <Row>
                  <h1>{itm.name}</h1>
                
                </Row> 
                <Row className='prop-img'>
                  <Col md={1}>
                     <img src="/assets/image/location.png" alt="" />
                  </Col>
                  <Col>
                   <h1>{itm.location}</h1>  
                  </Col>
                </Row>        
                <Row>
                  <p>
                  {truncate(itm.description,450)}
                  
                  </p>
                </Row>
                <Row className='prop-btm'>
                  <Col>
                    {/* <h6>₹ 1,20,850</h6> */}
                  </Col>
                  <Col>
                    <button onClick={() => navigate(`/search/location/${location}/adult/${adult}/child/${child}/startingDate/${startingDate}/endingDate/${endingDate}/propId/${itm._id}`)}>Select room</button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        </div>
   ))}
     </div> 

        


      
        <div className='foooter' style={{marginTop:"80px"}}>
    <Container>
        <Row className='foooter-1'>
           <img src='/assets/image/Asset 20.png'  />

        </Row>
        
        <Row className="about-4-fnt foooter-2">
          <img src="/assets/image/phone.png" alt="" />
           0484-7180465
        </Row>
        <Row className="about-4-fnt foooter-2" style={{paddingBottom:"30px"}}>
          <img src="/assets/image/email.png" alt="" />
          info@tawifacilities.com
        </Row>
       <Row className='foooter-3' >
          <center>    <hr/></center>
          <Col md={{ span: 1, offset: 2 }}>
          <h3>Home</h3>
          </Col>
          <Col md={1}>
          <h3>About </h3>
          </Col>
          <Col md={2}>
          <h3>Luxury Experience</h3>
          </Col>
          <Col md={2}>
          <h3>Book now</h3>
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
        </Col>
      </Row>   
        
     </Container> 
</div>
     
      </>
    )}  
        
    </div>
  )
}

export default Booking