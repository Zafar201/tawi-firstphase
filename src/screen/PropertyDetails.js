import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteProperty,
  detailsProperty,
  listProperties,
  deleteRooms,
} from "../actions/generalAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { ADD_ROOM_RESET, DELETE_PROPERTIES_RESET, DELETE_ROOM_RESET ,UPDATE_ROOM_RESET} from "../constants/generalConstants";

function PropertyDetails() {
  const params = useParams();
  const { id: propertyId } = params;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const propertyDetails = useSelector((state) => state.propertyDetails);
  const { loading, error, property } = propertyDetails;

  const roomAdd=useSelector(state=>state.roomAdd)
  const { success} = roomAdd;


    const roomDelete=useSelector(state=>state.roomDelete)
    const {success:succesDelete} = roomDelete
    const roomUpdate =useSelector(state=>state.roomUpdate )
    const { success:successUpdate} = roomUpdate;

  useEffect(() => { 
    if(success){
      dispatch({type:ADD_ROOM_RESET})
    }
    if(succesDelete){
      dispatch({type:DELETE_ROOM_RESET})
    }
    if(successUpdate){
      dispatch({type:UPDATE_ROOM_RESET})
    }
    dispatch(detailsProperty(propertyId));
    if (!loading && !error) {
      // console.log(property.rooms, "prop");
    }
  }, [dispatch, detailsProperty,success,succesDelete,successUpdate]);

  const toComponentB=(roomId)=>{
    navigate(`/room/${propertyId}/edit`,{state:roomId});
      }

      const deleteHandler=(room)=>{
        if (window.confirm('Are you sure to delete?')){
          dispatch(deleteRooms(propertyId,room._id))
        }
        
      }
  return (
    <div>
      <div className="admin-nav">
        <Container>
          <Row>
            <Col className="admin-logo">
              <Link to="/">
                <img src="../assets/image/log2.png" alt="" />
              </Link>
            </Col>
            <Col>
              <img
                style={{ float: "right" }}
                src="../assets/image/profile.png"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div className="dashboard">
          <Container>
            <Row className="dashboard-1">
              <Col>
                <h1> Property:{property.name}</h1>
              </Col>
              <Col>
                
                  {" "}
                  <button onClick={() => navigate(`/addroom/${propertyId}`)} style={{ float: "right" }}>
                    + Add Room{" "}
                  </button>{" "}
            
              </Col>
            </Row>

            <div className="cen">
              <Row style={{ paddingTop: "30px", paddingBottom: "20px" }}>
                <Col md={1}></Col>
                <Col>
                  <h2>Room name</h2>
                </Col>
                <Col>
                  <h2>Adult</h2>
                </Col>
                <Col>
                  <h2>Child</h2>
                </Col>
                {/* <Col>
                  <h2>booking</h2>
                </Col> */}
                <Col></Col>
              </Row>
              {property.rooms.length === 0 && (
                 <MessageBox>no rooms added</MessageBox>
              )}
             
              {property.rooms &&
                property.rooms.map((room) => (
                  <Row key={room._id} className="dashboard-3">
                    <Col md={1}></Col>
                    <Col>
                      <h3>{room.name}</h3>
                    </Col>
                    <Col>
                      <h4>{room.adult}</h4>
                    </Col>
                    <Col>
                      <h4>{room.child}</h4>
                    </Col>
                    {/* <Col>
                 
                      <img src="../assets/image/visible.png" alt="" />
                    </Col> */}
                    <Col>
                      <img  
                        onClick={()=>{toComponentB(room._id)}}    
                        style={{ marginRight: "16px" }}
                        src="../assets/image/edit.png"
                        alt=""
                      />
                      <img src="../assets/image/dlt.png" onClick={() => deleteHandler(room)}alt="" />
                    </Col>
                  </Row>
                ))}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}

export default PropertyDetails;
