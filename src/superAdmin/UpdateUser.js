import React, { useEffect, useState } from "react";
import { Col, Container, Row ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {
  getAllApprovedUsers,
  suspendUser,
  unSuspendUser,
} from "../actions/adminAction";
import { SUSPEND_USER_RESET,UN_SUSPEND_USER_RESET } from "../constants/adminConstants";
import { adminSignout } from "../actions/adminAction";
import Dialog from "../components/Dialog";

function UpdateUser() {
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.allUsersApproved);
  const { loading, error, users } = Users;
  const [showPop,setShowPop] = useState(false)
  const [data,setData]=useState('')
  const suspendedUsers = useSelector((state) => state.userSuspend);
  const { success } = suspendedUsers;
  const unSuspendedUsers = useSelector((state) => state.unSuspend);
  const { success:UnsuspendSuccess } = unSuspendedUsers;
  const adminsignin = useSelector((state) => state.adminSignin);
  const { adminInfo } = adminsignin;
  const [showTask, setShowTask] = useState(false)
 



  useEffect(() => {
    dispatch(getAllApprovedUsers());
    if (success) {
      dispatch({ type: SUSPEND_USER_RESET });
    }
    if(UnsuspendSuccess){
      dispatch({type:UN_SUSPEND_USER_RESET})
    }
  }, [dispatch, success,UnsuspendSuccess]);
  const suspend = (userId) => {
    if (window.confirm('Are you sure you want to suspend?')){
      dispatch(suspendUser(userId));
    }
    
  };
  const unsuspend = (userId) => {
    if (window.confirm('Are you sure you want to unsuspend?')){
    dispatch(unSuspendUser(userId));
    }
  };
  const signoutHandler = () => {
    if (window.confirm('Are you sure you want to signout?')){
      dispatch(adminSignout());
    }

  
  };
  const openNow=(userId)=>{
      const post =users.find((e)=>e._id === userId) 
      console.log(post)
      setData(post)
      console.log('heloooooo')
      setShowTask(true)
      // setShowPop(true )
      // setShow(true)
  }
  const cancel=()=>{
    // console.log('cancel')
    setShowTask(false)
}
const confirm=()=>{
    // console.log('confirm')
    setShowTask(false)
}
  return (
    <div className="superadmin updateuser">
      <Row className="superadmin-top">
        <Col className="superadmin-bg" md={3}>
          <Row>
            <Col style={{textAlign:"center"}}>
            <Link to='/superadmin'>   <img src="/assets/image/log3.png" alt="" /></Link> 
            </Col>
          </Row>
        </Col>
        <Col className="superadmin-bg2">
          <Row>
            <Link to="/superadmin">
              {" "}
              <h1>Activity Status</h1>{" "}
            </Link>
          </Row>
        </Col>
        <Col className="superadmin-nav-active">
          <h1>Update User</h1>
        </Col>
        <Col>
          <Link to="/signuprequest">
            {" "}
            <h1>Signup Request</h1>
          </Link>
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


      <Row className="superadmin-2">
        <Col md={3}>
          <div className="superadmin-active">
            <h2>User Details</h2>
          </div>
          {/* <div>
                    <h2>User Details</h2>
                 </div> */}
          <div>
          <Link to='/updatebooking'> <h2>Update Booking</h2> </Link>
          </div>
        </Col>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox>{error}</MessageBox>
        ) : (
          <Col>
            {/* <Row className='updateuser-body'>
                   <input type='search' placeholder='Serach User'/>
                 </Row> */}
            <Row className="updateuser-body">
              <Col><h1>Users</h1></Col>
              <Col className='updt-left'><h1>Activate/Deactivate</h1></Col>
              
            </Row>
            {users.map((user) => (
              <>
              <Row key={user._id} className={`updateuser-body-card ${user.adminSuspended ? "suspended" : ""}`}>
                <Col>
                  <h4>{user.f_name}</h4>
                </Col>
                {!user.adminSuspended && (
                  <Col md={1} style={{alignSelf:"center"}} >
                    <img  
                      onClick={()=>openNow(user._id)}
                     
                    
                      src="../assets/image/eyes.png"
                    />
                  
                  </Col>
                )}
                  <Col> 
                </Col>

                <Col style={{ alignSelf: "center" }}>
                  {user.adminSuspended ? (
                    <img
                      onClick={() => unsuspend(user._id)}
                      src="../assets/image/sus.png"
                    />
                  ) : (
                    <img
                      onClick={() => suspend(user._id)}
                      src="../assets/image/nulluser.png"
                    />
                  )}
                
                </Col>
             
              </Row>
              {/* <ReactTooltip
                  id="registerTip"
                  multiline
                  place="bottom"
                  effect="solid"
                  type="success"
                  event="click"
                
                >
                  <div>{data.email}</div>
                  <div>{data.phone}</div>
                  <div>{data.address}</div>
                </ReactTooltip> */}


         {/* {showPop && (
          <Container   className={`updateuser-body-card2 ${user.adminSuspended ? "suspended" : ""}`}>
            <Row>
              <h4>{data.f_name}</h4>
              </Row>

              <Row>
              <h4>{data.f_name}</h4>
              </Row>

              <Row>
              <h4>{data.f_name}</h4>
              </Row>
        </Container>
        )}       */}


 
   
          </>
              
            ))}
          </Col>
        )}
      </Row>

     

      <Row className="superadmin-2">
        <Col>
          <div></div>
        </Col>
      </Row>
    </div>
  );
}

export default UpdateUser;
