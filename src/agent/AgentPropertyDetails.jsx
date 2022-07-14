import React, { useEffect } from "react";
import { useState } from "react";
import { Accordion, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { checkProperty } from "../actions/generalAction";
import AgentNavbar from "../components/AgentNavbar";
import Criteria from "../components/Criteria";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function AgentPropertyDetails() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,

  };
    const [deals, setDeals] = useState(true)
    const [about, setAbout] = useState(false)
    const [photos, setPhotos] = useState(false)
  
    const [map, setMap] = useState(false)
    const [deatails, setDeatails] = useState(false)
    const dispatch = useDispatch()
    const checkPropertys= useSelector(state=>state.checkPropertys)
    const {loading, error, prop}= checkPropertys
    const navigate = useNavigate()

    const photopage=()=>{
      setDeals(false)
      setPhotos(true)
      setDeatails(false)
      setAbout(false)
      setMap(false)
    }
    const dealpage=()=>{
      setDeals(true)
      setPhotos(false)
      setDeatails(false)
      setAbout(false)
      setMap(false)
    }
    const roomDetails=()=>{
      setDeatails(true)
      setDeals(false)
      setPhotos(false)
      setAbout(false)
      setMap(false)
    }
    const aboutpage=()=>{
      setDeatails(false)
      setDeals(false)
      setPhotos(false)
      setAbout(true)
      setMap(false)
    }

    const mappage=()=>{
      setDeatails(false)
      setDeals(false)
      setPhotos(false)
      setAbout(false)
      setMap(true)
    }
    useEffect(()=>{
      dispatch(checkProperty('kerala','1','2','06-29-2022','06-29-2022'))                         
    
   },[dispatch])
  return (
    <div>
      <AgentNavbar />
      <div className="agentpropdetailsreen">
        <Container>
          <Row>
            <Col className="agentpropdetails" md={8}>
              <Row
                className="agentpropdetails-header"
                style={{
                  backgroundImage: `url("../assets/image/backbanner.png")`,
                }}
              >
                <Row className="agentpropdetails-content">
                  <Col>Check in</Col>
                  <Col>Check out</Col>
                  <Col>#Restaurent</Col>
                  <Col>#Bars</Col>
                </Row>
              </Row>
              <div className="agentpropdetails-nav">
                <ul>
                  <li onClick={dealpage} className={`${deals ? 'act' : ''}`}>deals</li>
                </ul>
                <ul>
                  <li  className={`${about ? 'act' : ''}`} onClick={aboutpage}>About </li>
                  <li  className={`${deatails ? 'act' : ''}`} onClick={roomDetails}>Room Details </li>
                  <li className={`${photos ? 'act' : ''}`} onClick={photopage}>Photos</li>
                  <li className={`${map ? 'act' : ''}`} onClick={mappage}>Map </li>
                  {/* <li>About </li> */}
                </ul>
              </div>
            

              
              <div className="agentprop-tabcontent">
              {deals && (
                <>
                <div className="agentpropdetails-nav2">
                  <ul>
                    <li>About </li>
                    <li>About </li>
                    <li>About </li>
                    <li>About </li>
                  </ul>
                </div>
                <Row className="agentprop-tableinside">
                  <h1>
                    {" "}
                    Packages for 2 adults from 30th June 2022 to 03rd July 2022
                  </h1>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Room type</th>
                        <th>Starting from</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                      </tr>
                    </tbody>
                  </Table>

                  <Accordion  defaultActiveKey={["0"]} alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>SUPERIOR BEACH</Accordion.Header>
                      <div className="default-acordian">
                      <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>   
                        <Col style={{textAlignLast:'right'}}>
                            
                         <input type="radio"  name="test"/>
                        </Col>   
                      </div>
                      <Accordion.Body  >
                      <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>   
                        <Col style={{textAlignLast:'right'}}>
                            
                         <input type="radio" name="test"/>
                        </Col>       
                      </Accordion.Body>

                      <Accordion.Body>
                        <Col>
                         hoyyy
                        </Col>
                        <Col>
                         hoyyy
                        </Col>
                        <Col>
                         hoyyy
                        </Col>
                        <Col style={{textAlignLast:'right'}}>
                            
                            <input type="radio" name="test" />
                           </Col>             
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>SUPERIOR BUNGALOW</Accordion.Header>
                      <div className="default-acordian">
                      <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>   
                        <Col style={{textAlignLast:'right'}}>
                            
                         <input type="radio"  name="test"/>
                        </Col>   
                      </div>
                      <Accordion.Body>
                        <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>
                        <Col style={{textAlignLast:'right'}}>
                            
                            <input type="radio"  name="test"/>
                           </Col>     
                 
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Row>
                </>
                    )}


                    {about && (
                      <div className="agent-about">
                      <h2>{!loading && !error && prop[0].name}</h2>
                      <h1 > {!loading && !error && prop[0].description}</h1>
                      
                      </div>
                      
                    )}

                    {map && (
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.181771524664!2d75.0807957!3d12.504107899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4846bda0b9525%3A0x1a6965b115fbfb96!2sLBS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1657770216020!5m2!1sen!2sin"
                      allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{width:'100%',height:'450px'}}></iframe>
                    )}

                    {photos && (
                      <>
                  <Slider {...settings} className="agent-prop-pic">
                    {!loading && !error && prop[0].images.length !== 0 && prop[0].images.map((img)=>(
                          <div >
                            <img src={img.location} alt="" />
                          </div>
                    ))}    
                    </Slider>
                    </>
                    )}


                    {deatails && (
                      
                      <div>
                           {loading && <LoadingBox></LoadingBox>}
                             {error && <MessageBox>{error}</MessageBox>}
                         {!loading && !error && prop[0].rooms.length !== 0 && prop[0].rooms.map((room)=>(
                            <Row className="agent-room-det">
                            <Col md={4} className='ag-img'>
                            <img src={room.images[0].location} alt="" /> 
                            </Col>
                            <Col className='ag-img'>
                            <h2> {room.description}</h2> 
                            </Col>
                            </Row>
                      
                    ))}   
                    
                      </div>
                    )}
              </div>

            
            </Col>
            <Col style={{marginTop:'18px'}}>
              <Criteria/>
              {/* <Criteria/>
              <Criteria/> */}
              <div className="proceed-btn">
                <button onClick={()=>navigate('/summary')}>Proceed</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AgentPropertyDetails;
