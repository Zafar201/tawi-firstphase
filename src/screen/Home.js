import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { checkProperty, listProperties } from '../actions/generalAction';
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {format} from 'date-fns'
import HotDeals from '../components/HotDeals';
import Footer from '../components/Footer';

function Home() {
  const dispatch = useDispatch()
  const propertyList=useSelector(state=>state.propertyList)
  const {loading , error , property} = propertyList;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [location, setLocation] = useState("kerala");
  const [adult, setAdult] = useState('0');
  const [child, setChild] = useState('0');
  const [showHot, setShowHot] = useState(false)
  const navigate = useNavigate()

  const bookingConfirm= useSelector((state=>state.bookingConfirm))
  const {success}=bookingConfirm

  const close=()=>{
    setShowHot(false)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listProperties())

   
      
    const timeout = setTimeout(() => {
      setShowHot(false)
    }, 2000)
    return () => clearTimeout(timeout)    

}, [setShowHot,dispatch]);


const date= ()=>{
  const startingDate = format(selectedDate, "MM-dd-yyyy")
  const endingDate = format(selectedDate2, "MM-dd-yyyy")
  navigate(`/search/location/${location}/adult/${adult}/child/${child}/startingDate/${startingDate}/endingDate/${endingDate}`);
}

const lux=()=>{
  navigate('/luxury')
}
  return (
    <div className="home"> 
    <HotDeals
    show={showHot}
    close={close}/>
      <div
        className="home-container"
        style={{ backgroundImage: `url("../assets/image/61.jpg")` }}
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
      
       <form >
        <Container className="home-2">
          <Row style={{ justifyContent: 'center' }}>
          <h1>The Tawi Experience</h1>
            <Row className="home-box">
              <Col className="home-box-1" md={3} >
                <Row className='home-box-mob'> 
                  {/* <Col md={1}>
                    <img src="../assets/image/Vect.png" alt="" />
                  </Col> */}
                  <Col>
                    <Row>
                    <h2>Date in</h2>
                      
                    </Row>
                    <Row>
                       <DatePicker 
                       selected={selectedDate} 
                       required
                       dateFormat="MM/dd/yyyy"  
                       onChange={date=> setSelectedDate(date)}
                
                   
                       minDate={new Date()}/>
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col className="home-box-2" md={3} >
                <Row className='home-box-mob'>
                  {/* <Col md={1}>
                    <img src="../assets/image/Vect.png" alt="" />
                  </Col> */}
                  <Col>
                    <Row>
                      <h2>Date out</h2>
                    </Row>
                    <Row>
                    <DatePicker 
                    dateFormat="MM/dd/yyyy" 
                    required 
                    selected={selectedDate2}  
                    onChange={date=> setSelectedDate2(date)} 
                
                    minDate={new Date()}/>
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col className="home-box-2 home-half" md={1}>
                <Row className='home-box-mob'>
                  <Col md={1}>
                    {/* <img src="../assets/image/Vect.png" alt="" /> */}
                  </Col>
                  <Col>
                    <Row className='js-cntr'>
                      {/* <h2>no.of guest</h2> */}
                      <h2>Adult </h2>
                       <input 
                      type="number" 
                      id="adult"
                      // placeholder="Enter numbers"
                      min="0"
                      required
                      value={adult}
                      onChange={(e) => setAdult(e.target.value)}/>
                     
                    </Row>
                  
                  </Col>
                </Row>
              </Col>
              <Col className="home-box-2 home-half" md={1}>
                <Row className='home-box-mob'>
                  <Col md={1}>
                    {/* <img src="../assets/image/Vect.png" alt="" /> */}
                  </Col>
                  <Col>
                    <Row className='js-cntr'>
                    
                      <h2>Child </h2>
                      <input 
                      type="number"
                      id="child"
                      value={child}
                      min="0"
                      required
                      onChange={(e) => setChild(e.target.value)} />
                    </Row>
                  
                  </Col>
                </Row>
              </Col>

              <Col className="home-box-2 home-halfs">
                <Row className='home-box-mob'>
                  <Col md={1}>
                    {/* <img src="../assets/image/Vect.png" alt="" /> */}
                  </Col>
                  <Col>
                    <Row>
                      <h2>Location</h2>
                      <select
                        name="location"
                        id="location"
                        required
                        onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="not selected">Please Select</option>
                  <option value="kerala">Kerala</option>
                  <option value="maldives">Maldives</option>
                  <option value="jammu">Jammu</option>
                </select>
                    </Row>
                  
                  </Col>
                </Row>
              </Col>

              <Col className="home-box-3 home-halfss" md={1}>
                <Row>
                  {/* <Col md={9}>
                    <h4 >Check availability</h4>
                  </Col> */}
                  <Col onClick={date} style={{ paddingLeft: '0px' }} className='home-search'>
                    <img src="../assets/image/search.png" alt="" />
                  </Col>
                </Row>
              </Col> 
            </Row>
          </Row>


          
        </Container>
        </form>
      </div>
  
    


      <div className="home-2-container">   
    <Container>
        <Row className='home-button'>
          
         <img onClick={lux} src="../assets/image/luxurystaybutton2.png" alt="" />
       
        </Row>
     </Container>  


        <Container>
          <Row className="home-2-explore">
            <h4>Explore with us</h4>
            <p>
              A limitless horizon. Teal skies that melt into turquoise waters,
              and a gentle breeze that cocoons you. Picture the most
              breath-taking beach you’ve ever stepped foot on, and an impossibly
              idyllic island that makes for a dream getaway. 
              Maldives, officially the Republic of Maldives, is a country in the
              Indian subcontinent of Asia, situated in the Indian Ocean. It lies
              southwest of Sri Lanka and India, about 750 kilometres from the
              Asian continent's mainland. Comprising a territory spanning
              roughly 90,000 square kilometres including the sea, land area of
              all the islands comprises 298 square kilometres .
            </p>
          </Row>
        </Container>

        <Container className="home-2-rec">
          <Row>
            <h1>Experience each moment!</h1>
          </Row>
        </Container>
             
        <div className='home-card'>     
        <Container className="home-3">
          <Row>
            <Col style={{ padding: '0px' }} md={3} className="home-3-img">
              <img src="../assets/image/home2.png" alt="" />
            </Col>
            <Col>
              <Container>
                <Row>
                  <h1>A Romantic experience.</h1>
                </Row>         
                <Row>
                  <p>
                    Wake up to the rhythm of waves washing ashore in the
                    Maldives. Your loved one is by your side. It’s 14th February
                    - a very special day indeed. You wonder if you made the
                    right decision to come to the Maldives for Valentine’s day.
                    You open the windows to let in the sunshine and the salty
                    tang of the balmy air. Romance, tranquillity and the sweet
                    scent of possibilities is in the air. You know you’ve made
                    the right choice; neither of you would rather be elsewhere.
                    A day of romance, thrills, and adventure awaits you in the
                    sunny isles of the Maldives.
                  </p>
                </Row>
                <Row>
                {/* <Link to="/propertyui">   <h6>Explore</h6> </Link> */}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        </div>

        <div className='home-card'>  
        <Container className="home-3">
          <Row>
            <Col style={{ padding: '0px' }} md={3} className="home-3-img">
              <img src="../assets/image/home3.png" alt="" />
            </Col>
            <Col>
              <Container>
                <Row>
                  <h1>Explore the culture!</h1>
                </Row>
                <Row>
                  {/* <Col md={5} className="home-3-1">
                    <img src="../assets/image/location.png" alt="" /> Maldives
                  </Col> */}
                </Row>
                <Row>
                  <p>
                    Although home to just over half a million people the
                    Maldives has its own unique culture and traditions. While
                    heavily influenced by various cultures around the rim of the
                    Indian Ocean, the Maldivian culture, craft and traditions
                    have been shaped by the island environment and the seas that
                    surround us. Maldives, is blessed with picture perfect palm
                    trees, white sandy beaches, and skies which put on
                    jaw-dropping displays anytime of the day. There are golden
                    sunrises, afternoons filled with clear blue skies, cotton
                    candy sunsets and night skies adorned with billions of
                    stars. All in all, it’s a veritable heaven for those seeking
                    to take some pictures for the ‘gram’.
                  </p>
                </Row>

                <Row>
                {/* <Link to="/propertyui">   <h6>Explore</h6> </Link> */}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        </div>


        <div className='home-card'>  
        <Container className="home-3">
          <Row>
            <Col style={{ padding: '0px' }} md={3} className="home-3-img">
              <img src="../assets/image/home4.png" alt="" />
            </Col>
            <Col>
              <Container>
                <Row>
                  <h1>Explore the landscape!</h1>
                </Row>
                {/* <Row>
                  <Col md={5} className="home-3-1">
                    <img src="../assets/image/location.png" alt="" /> Maldives
                  </Col>
                </Row> */}
                <Row>
                  <p>
                    The country’s unique geography mesmerizes the visitor. Reefs
                    that offer bands of color, tiny jewel-like islands rimmed
                    with the whitest of soft sand surrounded by the clearest
                    shallow waters that one can imagine. Only 200 of the islands
                    are inhabited, and a select few on each of the atolls are
                    resorts and some of the islands are used for industry and
                    agriculture. The beauty of the Maldives is not only above
                    the water. The Maldives is home to about five percent of the
                    planet’s reefs that comes with an explosion of color
                    contributed by soft and hard corals that form them. The
                    reefs are home to a thousand species of fish. Lured by the
                    rich nutrients that flow in with the currents, large pelagic
                    fishes such as manta rays and whale sharks also make the
                    Maldives their home.
                  </p>
                </Row>

                {/* <Link to="/propertyui">   <h6>Explore</h6> </Link> */}
                <Row></Row>
              </Container>
            </Col>
          </Row>
        </Container>
        </div>
         
        <Container>
        <Row style={{placeContent:"center"}} >
          <img style={{width:"95px",paddingTop:"78px"}} src="../assets/image/whiteline.png" alt="" />
        </Row>
        </Container>
        
      </div>

      <Footer/>

    
    </div>
  );
}

export default Home;
