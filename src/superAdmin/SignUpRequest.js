import  React, { useEffect, useState } from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import { Link, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getSignUpRequest,approveUser,rejectUser } from '../actions/adminAction';
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {APPROVE_USER_RESET ,REJECT_USER_RESET} from '../constants/adminConstants';
import { adminSignout } from "../actions/adminAction";
import Dialog from "../components/Dialog";

function SignUpRequest() {
  

   const dispatch = useDispatch()
   const signupCreate = useSelector((state) => state.signupCreate);
   const { loading, error, users } = signupCreate;
   const approveUsers= useSelector((state)=>state.approveUser);
   const {success} = approveUsers
   const rejectUsers = useSelector((state)=>state.rejectUser);
   const {done} = rejectUsers
   const adminsignin = useSelector((state) => state.adminSignin);
   const { adminInfo } = adminsignin;
   const [data,setData]=useState('')
   const [showTask, setShowTask] = useState(false)
   useEffect(()=>{
     
       dispatch(getSignUpRequest())
       if(success){
         alert("User accepted")
         dispatch({type:APPROVE_USER_RESET})
       }
       
       if(done){
        alert("User rejected")
        dispatch({type:REJECT_USER_RESET})
      }
     

   },[dispatch,success,done])

   
   const approveHandler=(userId)=>{
      // console.log('heloo',userId)
     dispatch(approveUser(userId))
   }
   const rejectHandler=(userId)=>{
      // console.log('heloo',userId)
     dispatch(rejectUser(userId))
   }
   const signoutHandler = () => {
    if (window.confirm('Are you sure you want to signout?')){
      dispatch(adminSignout());
    }
  };

  const openNow=(userId)=>{
    const post =users.find((e)=>e._id === userId) 
    console.log(post)
    setData(post)
    setShowTask(true)
}
const cancel=()=>{
  setShowTask(false)
}
const confirm=()=>{
  setShowTask(false)
}
  return (
<div className='superadmin updatebooking'>   
<Row className='superadmin-top'>
    <Col className='superadmin-bg' md={3}>
        <Row> 
            <Col style={{textAlign:"center"}}>
            <Link to='/superadmin'>   <img src="/assets/image/log3.png" alt="" /></Link> 
            </Col>   
        </Row>
    </Col>
    <Col className=' '>
        <Row>
        <Link to='/superadmin'>  <h1>Activity Status</h1> </Link>
        </Row>
    </Col>
    <Col className=''>
    <Row>
    <Link to='/updateuser'>   <h1>Update User</h1>   </Link>
   </Row>
    </Col>
     
    <Col className='superadmin-nav-active'>
    <Row className='superadmin-bg2 '>
          <h1>Signup Request</h1>
          
        </Row>
    </Col>
    <Col>
    <Row className='sup-sg'>
          {adminInfo && (
                 <Button onClick={signoutHandler}>Signout</Button>
               )}
          </Row>
    </Col>
   
</Row>

<Dialog show={showTask}
      cancel={cancel}
      confirm={confirm}
      datas={data}
      description='are you sure you want to delete'/>


<Row className='superadmin-2'> 
 <Col md={3}>
    <div  className='superadmin-active'>
     <h2 >User Details</h2>
    </div>
    {/* <div>
       <h2>User Details</h2>
    </div> */}
    <div>
    <Link to='/updatebooking'> <h2>Update Booking</h2> </Link>
    </div>
 </Col>
    
    <Col className='card-left'>
    {/* <Row className='updatebooking-body'>
        <h1>Booking id</h1>
       <input type='text' placeholder='Enter here'/>
       <button>Proceed </button>
    </Row> */}
    {!loading && !error && users.length == 0 && (
    <MessageBox>No new signup requests </MessageBox>
     )}
    

{loading? <LoadingBox></LoadingBox>:
error? <MessageBox>{error}</MessageBox>:
users &&  users.map((user)=>(
<>
    <Row key={user._id} className='updatebooking-body-card'>
  
      <Col md={3}>
        <h4>{user.f_name}</h4>     
      </Col>      
      <Col md={1} style={{alignSelf:"center"}}  >
                    <img  
                      onClick={()=>openNow(user._id)}
                      style={{cursor:"pointer"}}
                      src="../assets/image/eyes.png"
                    />
                  
                  </Col>
          <Col  md={{ span: 1, offset: 3 }}>
           <button type='submit'onClick={() => approveHandler(user._id)}>accept</button>
          </Col>
          <Col style={{marginLeft:"70px"}} className='signup-body-button'>
          <button  type='submit'onClick={() => rejectHandler(user._id)}>decline</button>
          </Col>
          <Col>
          {/* <Col>
           <p>7:50pm</p>
          </Col> */}
    
          </Col>
     
     
    </Row>
   
  
   
    </>
    
     ))}
    
 
</Col>
  
    
</Row>

<Row className='superadmin-2'> 
 <Col >
    <div>
   
    </div>   
 </Col>
            
</Row>

</div>
  )
}

export default SignUpRequest