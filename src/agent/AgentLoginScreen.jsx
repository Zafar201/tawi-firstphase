import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function AgentLoginScreen() {
    const navigate = useNavigate()

    const submitHandler=(e)=>{
        e.preventDefault()
        navigate('/agentsearch')
    }
  return (
    <div>
          <div className='admin-nav'>
       <Container>
           <Row>
               <Col className='admin-logo'>
               <Link to="/">    
                <img src="../assets/image/log3.png" alt="" />
               </Link>
               </Col>
          
               {/* <Col md={2} className='lang d-flex'>
                 <img src="../assets/image/lang.png" alt="" />
                 <p>  English</p>
                 
                 <img style={{height:"10px",marginTop:"18px"}} src="../assets/image/down-2.png" alt="" />

               </Col> */}
           </Row>
       </Container>
       </div>

       <form className='login' onSubmit={submitHandler}>
          <Container>
              <Row>
                  <h1>Agent Login</h1>
                  {/* <p>Manage your properties</p> */}
              
              </Row>
              <Row style={{justifyContent:"center",paddingTop:"48px"}} >
                  <div className='login-user'>
                      <img src="../assets/image/user.png" alt="" />
                      <input 
                       type="email"
                       id="email"
                       required
                    //    onChange={(e) => setEmail(e.target.value)}
                       placeholder='Email'/>
                  </div>
              </Row>
              <Row style={{justifyContent:"center",paddingTop:"27px"}}>
                  <div className='login-user'>
                      <img src="../assets/image/pass.png" alt="" />
                      <input
                       type="password"
                       id="password"
                       required
                    //    onChange={(e) => setPassword(e.target.value)}
                     
                       placeholder='Password'/>
                  </div>
                 
              </Row>
              <Row className='login-rem'>
                  {/* <Col  md={{ span: 3, offset: 3 }}>
                 
                      <input type="checkbox" /> <span>Remember me</span> 
                  
                  </Col>
                  <Col>
                    <p>Forgot credential?</p>
                  </Col>
                  <Col>
                  </Col> */}
              </Row>
              <Row style={{justifyContent:"center",paddingTop:"32px"}}>
                 <button type='submit'>Sign in</button> 
              </Row>
              <Row>
                <Link to='/register'>  <h3>Not registered yet? <span>Create an Account</span> </h3></Link>
              </Row>
          </Container>
       </form>
    </div>
  )
}

export default AgentLoginScreen