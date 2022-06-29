import React, { useEffect } from 'react';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <>
      {/* <div
        className="about"
        style={{ backgroundImage: `url("../assets/image/aboutbg3.jpeg")` }}
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
                      className='act'
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
                     Luxury experience
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


       
      </div> */}
        <div
        className="luxury-container about-container"
        style={{ backgroundImage: `url("../assets/image/5.jpg")` }}
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
                      className='act'
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
           <Row className='luxury-logo'>
                 <img src='../assets/image/Asset 20.png'  />
            </Row>
           <Row>
                 <h1>About Us</h1>
            </Row>
         </Container>   
    </div>

      {/* <Container>
        <Row className="about-3">
          <Col className="about-box">
            <Row>
              <center>
                <img src="../assets/image/vector.png" alt="" />
              </center>
            </Row>
            <Row>
              <h1>Services across</h1>
            </Row>
            <Row className="about-mrgin">
              <p>
                <span>12+</span>countries
              </p>
            </Row>
          </Col>

          <Col className="about-box">
            <Row>
              <center>
                <img src="../assets/image/help.png" alt="" />
              </center>
            </Row>
            <Row>
              <h1>Services across</h1>
            </Row>
            <Row className="about-mrgin">
              <p>
                <span>12+</span>countries
              </p>
            </Row>
          </Col>

          <Col className="about-box">
            <Row>
              <center>
                <img src="../assets/image/smile.png" alt="" />
              </center>
            </Row>
            <Row>
              <h1>Services across</h1>
            </Row>
            <Row className="about-mrgin">
              <p>
                <span>12+</span>countries
              </p>
            </Row>
          </Col>
        </Row>
      </Container> */}
    <div className='about-2-bg'>
     <Container className="about-2">
          <Row>
            <h1>Who are we</h1>
          </Row>
          <Row className='pdf'>
            <p>
              Tawi Explores was founded in 2022 to foster the Maldives travel
              experience from India. The Maldives, the island country with azure
              water, is the favorite destination for Indians, and Tawi Explores
              makes it memorable. The company provides exclusive high-quality
              luxury and ultra-luxury resorts to B2B and B2C customers across
              India. Tawi Explores offers travelers the convenience to choose
              and book the best luxury and ultra-luxury resort online. The
              company empowers travelers from all tier cities and towns in India
              to access the best resorts in the Maldives with a few clicks.{' '}
              <br /> <br />
              The two founders conceptualized to provide the best Maldives
              travel experience to every Indian laid the foundation for Tawi
              Explores. A cumulative 30 years’ of both the founders in Maldives
              tourism/hospitality sector and understanding towards travelers'
              expectations, experiences, and problems. In contrast, the other
              founder has a successful tourism business in Cherai Kerala,
              popularly known as the hidden gem, and acquired great knowledge
              about the expectation of Indian tourists. <br />
              <br />
              Tawi Explores uncovered the accessibility to the Maldives to
              Indians and built a robust relationship with trustworthy and
              exclusive luxury and ultra-luxury resorts in the Maldives to
              provide a real royal experience to our customers. The service
              caters to the needs of both B2B customers and B2C customers. The
              company provides customizable services to cater the individual
              needs. Tawi Explores has a highly enthusiastic and energetic team
              to meet customers' needs.
            </p>
            <a href='../assets/image/brochure.pdf' download><button >Download Brochure</button></a>
          </Row>
        </Container>
      </div>



      <div className="team">

        



        <Container>
          <Row style={{ justifyContent: 'center' }} className="team-1">
            <h1>Meet the team</h1>
            <img src="../assets/image/line.png" alt="" />
          </Row>
          <Row className='team-pad'>
            <Col
              md={{ span: 3, offset: 3 }}
              className="team-box"
              style={{ marginRight: '20px' }}
            >
              <Row>
                <img src="../assets/image/vishnu.png" alt="" />
              </Row>
              <Row>
                <h2>Vishnu Das</h2>
              </Row>
              <Row>
                <p>
                  Business Development
                  <br /> Asst. Manager
                </p>
              </Row>
              <Row></Row>
            </Col>
            <Col md={{ span: 3 }} className="team-box">
              <Row>
                <img src="../assets/image/maria.png" alt="" />
              </Row>
              <Row>
                <h2>Maria Noberta Thomas</h2>
              </Row>
              <Row>
                <p>Accounts Incharge</p>
              </Row>
              <Row></Row>
            </Col>
          </Row>

          <Row style={{ paddingTop: '40px' }} className='team-pad2'>
            <Col
              md={{ span: 3, offset: 3 }}
              className="team-box"
              style={{ marginRight: '20px' }}
            >
              <Row>
                <img src="../assets/image/akash.png" alt="" />
              </Row>
              <Row>
                <h2>Akash Arjun</h2>
              </Row>
              <Row>
                <p>
                  Sales & Reservation <br /> Executive
                </p>
              </Row>
              <Row></Row>
            </Col>
            <Col md={{ span: 3 }} className="team-box">
              <Row>
                <img src="../assets/image/hari.png" alt="" />
              </Row>
              <Row>
                <h2>Harikrishnan V S</h2>
              </Row>
              <Row>
                <p>
                  Sales & Reservation <br /> Executive
                </p>
              </Row>
            </Col>
          </Row>

          <Row className="team-line-2">
            <img src="../assets/image/whiteline.png" alt="" />
          </Row>
        </Container>
      </div>

      
      <Footer/>
    </>
  );
}

export default About;
