import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Slider from 'react-slick/lib/slider';

function NewSlider() {

        const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 1000,
        };
  return (
    <div className='autoplay'>
        <Container>
          <Row>  
        <Slider {...settings}>
          <div>
            <img src="/assets/image/1.jpg" alt="" /> 
          </div>
          <div>
          <img src="/assets/image/2.jpg" alt="" /> 
          </div>
          <div>
          <img src="/assets/image/3.jpg" alt="" /> 
          </div>
          <div>
          <img src="/assets/image/1.jpg" alt="" /> 
          </div>
          <div>
          <img src="/assets/image/4.jpg" alt="" /> 
          </div>
          <div>
          <img src="/assets/image/6.jpg" alt="" /> 
          </div>
        </Slider>
        </Row>
       </Container> 
      </div>
  )
}

export default NewSlider