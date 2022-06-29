import React from 'react'
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';

function Sliders() {
    
  const settings = {
    customPaging: function(i) {
      return (
        <a className='bottom-img'>
         <center> <img src={`../assets/image/slider${i + 1}.jpg`} /></center>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div clasName='slider'>
     
     <Container>
        <Row>
        <Slider {...settings}>
          <div>
          <center>  <img src="../assets/image/slider1.jpg" /> </center>
          </div>
          <div>
          <center>  <img src="../assets/image/slider2.jpg" /></center>
          </div>
          <div>
          <center>   <img src="../assets/image/slider3.jpg" /></center>
          </div>
          <div>
          <center>  <img src="../assets/image/slider4.jpg" /></center>
          </div>
          <div>
          <center>  <img src="../assets/image/slider5.jpg" /></center>
          </div>
          <div>
          <center>  <img src="../assets/image/slider6.jpg" /></center>
          </div>
        </Slider>
         </Row> 
      </Container>
  </div>
  )
}

export default Sliders