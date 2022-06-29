import React, { useEffect,useState } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import axios from 'axios'
import Swal from 'sweetalert2';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
const [name , setName]= useState ('')
const [email , setEmail]= useState ('')
const [description , setDescription]= useState('')
const [val, setVal] = useState();


const submitHandler=(e)=>{
 e.preventDefault()
 console.log(name,email,description)
  axios.post('https://script.google.com/macros/s/AKfycbzbZM9OC0778rLQYRmBHlpU8VnaHqEP0ZhncrkrtIx0MHD6lWLDPyrSkUYyeTUsqWDZ/exec',name,email,description).then(res=>
  { 
      //Success Message in Sweetalert modal
      Swal.fire({
        title: 'form has been successfully.',
        text: "Thanks",
        type: 'success',            
      });  
      setName('')
      setEmail('')
      setDescription('')
      console.log(res)
 
  }).catch(err=>console.log(err,'er'))
}

// const handleReset = (e) => {
 
//       setName(e.value = "")
//       setEmail(e.value = "")
//       setDescription(e.value = "")
// };
  return (
    <>
    <div
        className="luxury-container"
        style={{ backgroundImage: `url("../assets/image/4.jpg")` }}
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
                      
                      style={{ color: ' #D9B061 !important;' }}
                    >
                     Luxury Experience
                    </Nav.Link>
                  </Link>
                </Col>
                <Col md={4}>
                  <Link to="/contact">
                    {' '}
                    <Nav.Link href="#deets" className='act'>Contact Us</Nav.Link>
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
                 <h1>Conact Us</h1>
            </Row>
         </Container>   
    </div>

    <form onSubmit={submitHandler}>
        <Container className="contact-2">
        <Row>
          
          <Col md={8}>
            <Container>
              <Row>
                <h1>Connect with us</h1>
                <p>
                  Fill the form and we’ll be getting in touch with you ASAP!
                </p>
              </Row>
              <Row>
                <div className="contact-2-pad">
                  <Row>
                    <input type="text" 
                    placeholder="Your name"
                    required
                    value={name}
                    name='name'
                    id='name' 
                    onChange={(e)=>setName(e.target.value)}/>
                  </Row>
                  <Row className="contact-2-pd">
                    <input type="text"
                     placeholder="Your email" 
                     name='email'
                     id='email'
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}/>
                  </Row>
                  <Row>
                   
                    <textarea
                      name="description"
                      id="description"
                      cols="6"
                      rows="6"
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}
                      placeholder="what whould you like to know"
                    ></textarea>
                  </Row>
                  <Row className='submit'>
                    <Col md={3}>
                    <button type='submit'>Submit</button>
                    </Col>
                    {/* <Col md={2}>
                       <h5 onClick={handleReset}>Clear form </h5>
                    </Col> */}
                   
                  </Row>
                </div>
              </Row>
            </Container>
          </Col>
         


          <Col className="contact-right">
            <Row className="contact-right1">
              <img src="../assets/image/mail.png" alt="" />
            </Row>
            <Row className="contact-right2">
              <p>info@tawifacilities.com</p>
            </Row>

            <Row className="contact-right1">
              <img src="../assets/image/phone2.png" alt="" />
            </Row>
            <Row className="contact-right2">
              <p> 0484-7180465</p>
            </Row>

            <Row className="contact-right3">
              <img src="../assets/image/loc.png" alt="" />
            </Row>
            <Row className='contact-right4'>
              <p>
                SatyaSim Niwas Near Ramavarma High School Cherai P. O Pin :
                683514 Ernakulam District Kerala
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
      </form>

      <Container className='contact-map'>
        <Row className='contact-map1'>
          <img src="../assets/image/location3.png" alt="" />
          <p>Locate us in Google Map</p>
        </Row>
        <Row>
        <iframe style={{height:"450px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.642562700067!2d76.19520311479523!3d10.128315492763246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0810bc1f9c2027%3A0xeab32e7778557666!2sRama%20Varma%20Union%20High%20School!5e0!3m2!1sen!2sin!4v1644147798803!5m2!1sen!2sin" 
        title='map' loading="lazy"></iframe>
        </Row>
      </Container>

     <Footer/>
    
    </>
  );
}

export default Contact;
