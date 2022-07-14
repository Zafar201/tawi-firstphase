import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { checkProperty } from '../actions/generalAction'
import AgentNavbar from '../components/AgentNavbar'
import Criteria from '../components/Criteria'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

function AgentSearchListScreen() {
    const checkPropertys= useSelector(state=>state.checkPropertys)
    const {loading, error, prop}= checkPropertys
    const dispatch= useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(checkProperty('kerala','1','2','06-29-2022','06-29-2022'))                         
      
     },[dispatch])

     const truncate=(str,n)=>{
        return str.length>n?str.substr(0,n-1)+ "...." :str
      }
  return (
    <div>
       <AgentNavbar/>

      <div className="agent-searchlist">
        <Container>
            <Row>
                <Col md={3}>
                    <Criteria/>
                </Col>
                <Col md={9} className="searchlist-right">
                <div >
                  {loading && <LoadingBox></LoadingBox>}
                  {error && <MessageBox>{error}</MessageBox>}
      {!loading && !error && prop.map((itm)=>(
       <div key={itm._id} className='home-card card-2'>     
        <Container >
          <Row className="home-3">
            <Col style={{ padding: '0px' }} md={4} className="home-3-img">
              <img src={itm.images.length !== 0 && itm.images[0].location } alt="" />
            </Col>
            <Col>
              <Container>
                <Row>
                  <h1 >{itm.name}</h1>
                
                </Row> 
                <Row className='prop-img'>
                  <Col md={1}>
                     <img src="/assets/image/location.png" alt="" />
                  </Col>
                  <Col>
                   <h1 style={{marginLeft:'0px'}}>{itm.location}</h1>  
                  </Col>
                </Row>        
                <Row>
                  <p>
                  {truncate(itm.description,100)}
                  
                  </p>
                </Row>
                <Row className='prop-btm'>
                  <Col>
                    {/* <h6>₹ 1,20,850</h6> */}
                  </Col>
                  <Col>
                    <button onClick={()=>navigate('/agentpropertydetails')}>Select room</button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        </div>
   ))}
     </div> 
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default AgentSearchListScreen