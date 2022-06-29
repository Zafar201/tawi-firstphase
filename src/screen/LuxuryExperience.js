import React ,{ useEffect}from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';
import Footer from '../components/Footer';
import Sliders from '../components/Sliders';

function LuxuryExperience() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
         <div
        className="luxury-container"
        style={{ backgroundImage: `url("../assets/image/luxury.png")` }}
      >
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container className="nav-pad">
            <Col md={4}>
              <Navbar.Brand className="logo">
              <Link to="/"> <img src="../assets/image/log1.png" alt="" /></Link>
              </Navbar.Brand> 
            </Col>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Col md={4}>
                  <Link to="/">
                    {' '}
                    <Nav.Link href="#deets" >Home</Nav.Link>{' '}
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
                      className='act'
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
           <Row className='luxury-logo'>
                 <img src='../assets/image/Asset 20.png'  />
            </Row>
           <Row>
                 <h1>The Luxury Experiences</h1>
            </Row>
         </Container>   
    </div>

      <div className='luxury-second'> 
        <Container>
           <Row className='luxury-2'>
             <img src='../assets/image/logo-pullman.png'  /> 
            </Row>   
         </Container>

         <Container>
           <Row className='luxurythird'>
                <Col className='luxury-3'>
                  <Row>
                     <h1>DISCOVER A NEW LUXURY ALL-INCLUSIVE RESORT IN MALDIVES</h1>
                     <p>Pullman Maldives Maamutaa is a luxury all-inclusive resort in Maldives where guests can make the most out of exclusive benefits, inspire their minds, push their boundaries. Here you’ll find everything you need to up your game.
                          Located in the South of Maldives, Maamutaa Island in Gaafu Alifu Atoll is where our enterprising playground is based, set amidst 18 hectares of lush vegetation and surrounding a natural lake, our commitment is to offer our guests the holiday of a lifetime.
                          Let’s get down to business and the business of having fun!
                      </p>
                  </Row>
                  <Row>
                      <h2> Shuttle |  Restaurant  |   Wi-Fi  |   Breakfast   |   Bar   |    Meeting rooms</h2>
                  </Row>

                  <Row>
                    <Row> 
                      <h3>Restaurents</h3>
                     </Row>
                     <Row> 
                        <Col>
                           <Row>
                           <h4>PHAT CHAMELEON </h4>
                           <h5>Restaurant  </h5>
                           <h5>
                                Sight, texture, taste, memory... <br />
                                An exclusive dining experience <br />
                                involving all your senses
                            </h5>
                            </Row>
                            <Row>
                           <h4>SOUQ OVEN </h4>
                           <h5>Restaurant </h5>
                           <h5>
                               Discover unique flavors from the cuisines of the Middle East, 
                                 Turkey and Italy to forge its own culinary identity with tasty à la carte options
                           </h5>
                           
                            </Row>
                            <Row>
                           <h4>SOL RISING</h4>
                           <h5>Bar / Lounge </h5>
                            <h5> Breakfast, bar bites and beverages by the pool</h5>
                            
                            </Row>
                        </Col>


                        <Col>
                        <Row>
                           <h4>THE HUB</h4>
                           <h5>Bar / Lounge </h5>
                            <h5> Slender palms and twin pools. White sands and placid waters. Cocktails and light bites.</h5>
                            </Row>
                            <Row>
                            <Row>
                           <h4>MÉLANGE </h4>
                           <h5>Restaurant </h5> 
                           <h5>
                              Our flexible all-day-dining restaurant overlooking the beach and
                              even with outdoor seating area by the pool. 
                           
                            </h5>
                            </Row>
                           
                     
                           
                           <h4>PHAT CHAMELEON </h4>
                           <h5>Bar / Lounge </h5>
                            <h5>A front-row vantage point for awe-inspiring sunsets over worldly wines and tasty tapas</h5>
                            </Row>
                         </Col>
                     </Row>
                  </Row> 
                </Col>




                <Col md={{ span: 4, offset: 2 }} className='luxury-right'>
                    <h1>Villas</h1>
                    <ul>
                    
                    
                
                 



 

                        <li>The Aqua Villas</li>
                        <li>The Royal Suite</li>
                        <li>Two Bedroom Ocean Pool Villa</li>
                        <li>Ocean Pool Suite </li>
                        <li>Sunset Ocean Pool Villa  </li>
                        <li>Ocean Pool Villa </li>
                        <li>Ocean Villa</li>
                        <li>Two Bedroom Beach Pool Villa</li>
                        <li>Beach Pool Villa</li>
                        <li>Family Beach Pool Villa</li>
                        <li>Family Beach Villa</li>
                        <li>Beach Villa </li>
                    </ul>

                </Col>
            </Row>   
         </Container>

         <Container className='mb-box'>
            <Row className='luxury-4'>
            <Link to='/'>  <button>Book now</button> </Link>
            </Row> 
            <Row className='luxury-4-box'>
              <h1>Stay with is & get 50% OFF</h1>
              <p>only for indian market</p>
            </Row>   
         </Container>


         <Sliders/>



        
      </div>  
      {/* <Footer/>  */}

      <div className='foooter foooters'>
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
  </div>
  )
}

export default LuxuryExperience