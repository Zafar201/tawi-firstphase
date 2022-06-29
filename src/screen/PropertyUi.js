import { Button } from 'bootstrap';
import { Modal } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import Slider from 'react-slick/lib/slider';
import { checkProperty } from '../actions/generalAction';
import ImgDialog from '../components/ImgDialog';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import NewSlider from '../components/NewSlider';
function PropertyUi() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
      speed: 2000,
    slidesToScroll: 3,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
    ]
  };
  const params = useParams();
    const dispatch = useDispatch()
    const [props,setProps]=useState('')
    const checkPropertys= useSelector(state=>state.checkPropertys)
    const {loading, error, prop}= checkPropertys
    const { adult,child,location,startingDate,endingDate,propId } = params;
    const [image,setImage]=useState('')
    const navigate = useNavigate()
    const [showTask, setShowTask] = useState(false)
    const [small,setSmall] = useState(true)
    const [large,setLarge] = useState(false)

    const open=(location)=>{
     
      console.log(location,'ls')
      setImage(location)
      console.log(image,'imga')
      // setShowTask(true)
    }

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(checkProperty( location,adult,child,startingDate,endingDate))
   
      // console.log(prop,'prop');
  
  

    // if(!loading){
    //      const sc = prop.filter((e) => e._id == propId);
    //       console.log(sc,'sc');
    //       setProps(sc[0])            
    //       console.log(props,'prps');                 
    // }
    // if(!loading){
    //   const filt = prop.find((e)=>e._id == propId);
    //   console.log(filt,'filt');
    //   setProps(filt)
      
    // }
    // if(!loading && !error){
    //   const img=prop.find((e)=>e._id== propId).images.length !== 0 && prop.find((e)=>e._id== propId).images[0].location 
    //   setImage(img)
    //   console.log(img,'img')

    // }

}, [dispatch]);
const truncate=(str,n)=>{
  return str.length>n?str.substr(0,n-1)+ "...." :str
}
const truncate2=(str,n)=>{
  return str.length>n?str.substr(0,n-1)+ "...." :str
}
const redirect=(map)=>{
  // console.log(map)
  window.location.href= map
}

const cancel=()=>{
  // console.log('cancel')
  setShowTask(false)
}
const confirm=()=>{
  // console.log('confirm')
  setShowTask(false)
}

const showFull=()=>{
  setSmall(false)
}

const showLess=()=>{
  setSmall(true)
}

  return (
    <div>
       {loading? <LoadingBox></LoadingBox>:
       error? <MessageBox>{error}</MessageBox>:(
        <>
        <div className="propertyui">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container className="nav-pad">
            <Col md={4}>
              <Navbar.Brand className="logo">
              <Link to="/"> <img src="/assets/image/log3.png" alt="" /></Link>
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

        <ImgDialog show={showTask}
      cancel={cancel}
      confirm={confirm}
      data={image}
      title='heloo'
      description='are you sure you want to delete'/>
     

        {/* {prop.find((e)=>e._id==propId).map((property)=>( */}
     <>
     <Container>
        <Row className='propertyui-2 prop-ui-2 '>
       

           
            <Col md={6} className='prop-wd'>
               <img src={image ? image : prop.find((e)=>e._id== propId).images.length !== 0 ? prop.find((e)=>e._id== propId).images[0].location : ""} alt="" />
            </Col>
            <Col md={6 }>
              <Row>
                <h2>{prop.find((e)=>e._id== propId).name ? prop.find((e)=>e._id== propId).name : ""}</h2>
              </Row>
              <Row style={{paddingTop:"20px"}}>
                  <Col md={1} className='cl2'>
                     <img src="/assets/image/cl2.png" alt="" />
                  </Col>
                  <Col >
                     <h3>{startingDate} - {endingDate}</h3>
                  </Col>
              </Row>
              <Row className='desc-bt'>
                {prop.find((e)=>e._id== propId).description.length > 300 && (
                  <>     
                  {small && (  
                    <>
                    <p>{truncate2(prop.find((e)=>e._id== propId).description,300)}</p>
                    </>  
                    )}         
                  </>
                )}

                    {prop.find((e)=>e._id== propId).description.length < 300 && (
                  <>     
                  {small && (  
                    <>
                    <p>{prop.find((e)=>e._id== propId).description}</p>
                    </>  
                    )}         
                  </>
                )}

                {small && prop.find((e)=>e._id== propId).description.length > 300 && (
                  <button onClick={showFull}>Read More</button>
                )}

               
                  <>
                  {!small && (
                    <>
                    <p>{prop.find((e)=>e._id== propId).description}</p>
                    <button onClick={showLess}>Show less</button>
                    </>
                  )}          
                  </>
           
                
              </Row>
              <Row className='g-map'>
                 <button onClick={()=>redirect(prop.find((e)=>e._id== propId).map)}>Locate us on google Map</button> 
              </Row>
            </Col>
           
         </Row>
      </Container>


    
      <div className='autoplay' style={{marginTop:"45px"}}>
   
        <Container>
       
          <Row>  
           
        <Slider {...settings}>
        {prop.find((e)=>e._id== propId).images.length !== 0 && prop.find((e)=>e._id== propId).images.map((img)=>(    
          <div>
        
            <img onClick={()=>open(img.location)} src={img.location} alt="" /> 
    
          </div>
                  )) }
        </Slider>
      
        </Row>
          
       </Container> 
   
      </div>

      
      {prop.find((e)=>e._id==propId).rooms.map((sRoom)=>(
      <Container key={sRoom._id} style={{paddingTop:"100px"}}>
        <Row className='prop-card'>
          <Col md={4} style={{paddingLeft:"0"}} className='props-card'>
            <img src={sRoom.images.length !== 0 && sRoom.images[0].location} alt="" />
          </Col>

          <Col>
          
             <Row style={{paddingTop:"38px"}}>
                <Col md={4}>
                   <h2>{sRoom.name}</h2>
                </Col>
                <Col md={6} className='prop-room-vect'> 
                <Row className='prop-img'>
                    <Col md={2}>
                    <img src="/assets/image/child2.png" alt="" />
                    </Col>
                    <Col>
                    <p>{child}</p>
                    </Col>
                   
                  </Row>
                  <Row className='prop-img'>
                    <Col md={2}>
                    <img src="/assets/image/adult.png" alt="" />
                    </Col>
                    <Col>
                    <p>{adult}</p>
                    </Col>
                   
                  </Row>
                  <Row className='prop-img'>
                    <Col md={2}>
                    <img src="/assets/image/bed.png" alt="" />
                    </Col>
                    <Col>
                    <p>{sRoom.bedType}</p>
                    </Col>
                   
                  </Row>
                  <Row className='prop-img'>
                    <Col md={2}>
                    <img src="/assets/image/roomsize.png" alt="" />
                    </Col>
                    <Col>
                    <p>{sRoom.size}</p>
                    </Col>
                   
                  </Row>
                </Col>           
             </Row>
           
              <Row>
                 <h3>{truncate(sRoom.description,150)}</h3>
              </Row>
           
               <Row style={{paddingTop:"35px"}}>
                  <Col>
              
                  </Col>

                  <Col>
                    <button onClick={() => navigate(`/search/location/${location}/adult/${adult}/child/${child}/startingDate/${startingDate}/endingDate/${endingDate}/propId/${propId}/roomId/${sRoom._id}`)}>Book now</button>
              
                  </Col>
               </Row>
          </Col>
        </Row>
      </Container>
       ))}   
      </>
       
         {/* ))}    */}
       
     </div>    

     <div className='foooter'>
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
          <Link to='/'><h3>Home</h3></Link>
          </Col>
          <Col md={1}>
          <Link to='/about'><h3>About </h3></Link>
          </Col>
          <Col md={2}>
          <Link to='/luxury'><h3>Luxury Experience</h3></Link>
          </Col>
          <Col md={2}>
          <Link to='/'> <h3>Book now</h3></Link>
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

export default PropertyUi





