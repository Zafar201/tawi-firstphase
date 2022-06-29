import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getBookings } from '../actions/adminAction';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { APPROVE_BOOKING_RESET, REJECT_BOOKING_RESET } from '../constants/adminConstants';

function UpdateBooking() {
  const bookingList = useSelector((state) => state.bookingList);
  const { loading, error, property } = bookingList;
  const approveBookings = useSelector((state) => state.approveBooking);
  const { success } = approveBookings;
  const rejectBookings = useSelector((state) => state.rejectBooking);
  const { success:rejectSuccess } = rejectBookings;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(getBookings())

    
 }, [dispatch,success,rejectSuccess]);
// if(success){
//   dispatch({type:APPROVE_BOOKING_RESET})
// }
// if(rejectSuccess){
//   dispatch({type:REJECT_BOOKING_RESET})
// }
 
  return (
    <div className='superadmin updatebooking'>
       
             <Row className='superadmin-top'>
                 <Col className='superadmin-bg' >
                     <Row> 
                         <Col style={{textAlign:"center"}}>
                         <Link to='/superadmin'>   <img src="/assets/image/log3.png" alt="" /></Link> 
                         </Col>
                       
                     </Row>
                 </Col>
                 <Col className='superadmin-bg2 superadmin-nav-active'>
                     <Row>
                        <h1>Update Booking</h1>
                     </Row>
                 </Col>
                 <Col className=''>
               
                 </Col>
                
                 <Col>
                 </Col>
                
             </Row>
        
        
             <Row className='superadmin-2'> 
              <Col md={3}>
                 <div >
                 <Link to='/superadmin'> <h2 >User Details</h2></Link> 
                 </div>
                 {/* <div>
                    <h2>User Details</h2>
                 </div> */}
                 <div className='superadmin-active'>
                     <h2>Update Booking</h2>
                 </div>
              </Col>
                 
                 <Col>
                 {/* <Row className='updatebooking-body'>
                     <h1>Booking id</h1>
                    <input type='text' placeholder='Enter here'/>
                    <button>Proceed </button>
                 </Row> */}
             
             {loading? <LoadingBox></LoadingBox>:
             error? <MessageBox>{error}</MessageBox>:
             property.bookings.map((data)=>(

            <>
                 <Row key={data._id} className='updatebooking-body-card updatebooking-body-card2'>
                   <Col >
                     <h4>{data.propName}</h4>
                   </Col>
                   <Col className='msg-pd'>
                     {data.adminApproved? (
                       <MessageBox>Approved</MessageBox>
                     ):(
                       <h4>Not approved</h4>
                     )}
                   </Col>
                   <Col >
                     <h4>{data.name}</h4>
                   </Col>
                   <Col >
                     {/* <h4></h4> */}
                     <h4>{data.phone}</h4>
                     {/* <h4>{data.email}</h4> */}
                   </Col>
                   <Col >
                     <h4>{data.price}</h4>
                    
                   </Col>
                   <Col >
                  <button onClick={() => navigate(`/acceptbooking/propId/${data.propId}/bookId/${data._id}`)}> View Booking</button>  
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

export default UpdateBooking