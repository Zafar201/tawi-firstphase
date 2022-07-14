import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { addRoom } from '../actions/generalAction';
import { ADD_ROOM_RESET } from '../constants/generalConstants';

function AddRoom() {
  const params = useParams();
  const { id: propertyId } = params;
  const [name, setName] = useState('');
  const [occupancy, setOccupency] = useState('');
  const [adult, setAdult] = useState('');
  const [child, setChild] = useState('');
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('');
  const [bedType, setBedType] = useState('');
  const [amneties, setAmneties] = useState([]);
  const [price1, setPrice1] = useState('');
  const [price2, setPrice2] = useState('');
  const [price3, setPrice3] = useState('');
  const [price4, setPrice4] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const addRoom = useSelector(state=>state.addRoom)
  // const {loading, error, success, newRoom} = addRoom

  const roomAdd=useSelector(state=>state.roomAdd)
  const { success} = roomAdd;

  useEffect(()=>{
     if(success){
       dispatch({type:ADD_ROOM_RESET})
     }
  },[])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addRoom(
        name,
        description,
        adult,
        child,
        size,
        bedType,
        amneties,
        price1,
        price2,
        price3,
        price4,
        propertyId
      )
    );
    navigate(`/property/${propertyId}`);
  };

  const amnetiesFun = (a) => {
    if (amneties.includes(a)) {
      setAmneties(amneties.filter(item => item !== a))
    } else {
      setAmneties([...amneties, a]);
    }
    // console.log(amneties);
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
                style={{ float: 'right' }}
                src="../assets/image/profile.png"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
      

      <div className="addproperty">
        <Container>
          <Row>
            <h1>Add Room</h1>
          </Row>
          <form onSubmit={submitHandler}>
            <Row>
              <Col>
                <h2>Room name</h2>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col>
                {/* <h2>Name of property</h2>
                     <input type="text" /> */}
              </Col>
              <Col>
                {/* <h2>Name of property</h2>
                     <input type="text" /> */}
              </Col>
            </Row>

            <Row style={{ paddingTop: '30px' }}>
              <h2>
                Description <span>(100-140 words)</span>
              </h2>
              <textarea
                name="description"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                cols="25"
                rows="10"
                required
              ></textarea>
            </Row>

            {/* <Row>
              <Col className="addproperty-2" md={4}>
                <button>
                  <img src="../assets/image/cam.png" alt="" />
                  Add images <span>(upto 15 images)</span>
                </button>
                <h3>delete image</h3>
              </Col>

              <Col className="addproperty-3" md={{ span: 6, offset: 1 }}>
                <div style={{ backgroundColor: 'white' }}></div>
                <div style={{ backgroundColor: ' #EBEBEB' }}></div>
                <div style={{ backgroundColor: ' #E3E3E3;' }}></div>
                <div style={{ backgroundColor: '#A7A6A6' }}></div>
              </Col>
            </Row> */}

            <Row className="addroom-4">
              <Col>
                <h2>Adualt</h2>
                <input
                  type="number"
                  id="adult"
                  placeholder="Enter numbers"
                  required
                  onChange={(e) => setAdult(e.target.value)}
                />
              </Col>
              <Col>
                <h2>Child</h2>
                <input
                  type="number"
                  id="child"
                  placeholder="Enter numbers"
                  required
                  onChange={(e) => setChild(e.target.value)}
                />
              </Col>
             
              <Col>
                {/* <h2>Name of property</h2>
                     <input type="text" /> */}
              </Col>
            </Row>
            <Row className="select">
            <Col>
                <h2>Room Size (sq. ft)</h2>
                <input
                  type="number"
                  id="size"
                  placeholder="Enter size"
                  required
                  onChange={(e) => setSize(e.target.value)}
                />
              </Col>
              <Col>
                <h2>Bed Type</h2>
                <select
                  name="cars"
                  id="cars"
                  required
                  onChange={(e) => setBedType(e.target.value)}
                >
                  <option value="not selected">Please Select</option>
                    <option value="King Bed">King Bed</option>
                    <option value="Queen Bed">Queen Bed</option>
                    <option value="Standard Double bed">Standard Double bed</option>
                    <option value="Twin Bed">Twin Bed</option>
                </select>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>

            <div className="addroom-5">
              <Row>
                <h5>Amneties</h5>
              </Row>
              <Row>
                <Col onClick={() => amnetiesFun('Air conditioner')} className={amneties.includes("Air conditioner") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Air conditioner.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Air conditioner</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('Bathrobe')} className={amneties.includes("Bathrobe") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Bathrobe.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Bathrobe</h6>
                  </Row>
                </Col>
                
                <Col onClick={() => amnetiesFun('Bathroom amneties')} className={amneties.includes("Bathroom amneties") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Bathroom amneties.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Bathroom amneties</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('Bathtub')} className={amneties.includes("Bathtub") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Bathtub.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Bathtub</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('Bidet')} className={amneties.includes("Bidet") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Bidet.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Bidet</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('CableSatellite Television')} className={amneties.includes("CableSatellite Television") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/CableSatellite Television.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Cable/Satellite Television</h6>
                  </Row>
                </Col>
                <Col style={{ background: 'none' }}></Col>
                <Col style={{ background: 'none' }}></Col>
              </Row>
            </div>
            <div className="addroom-5">
              <Row>
                <Col onClick={() => amnetiesFun('Coffe Tea maker')} className={amneties.includes("Coffe Tea maker") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Coffe Tea maker.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Coffe/Tea maker</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('Fire Alarm')} className={amneties.includes("Fire Alarm") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Fire Alarm.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Fire Alarm</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('Hair Dryer')} className={amneties.includes("Hair Dryer") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Hair Dryer.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Hair Dryer</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('High Definition (HD) Flat panel Television')} className={amneties.includes("High Definition (HD) Flat panel Television") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/High Definition (HD) Flat panel Television.png" alt="" />
                  </Row>
                  <Row>
                    <h6>HD Flat panel Television</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('Housekeeping service')} className={amneties.includes("Housekeeping service") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Housekeeping service.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Housekeeping service</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('Closets in room')} className={amneties.includes("Closets in room") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Closets in room.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Closets in room</h6>
                  </Row>
                </Col>
                <Col style={{ background: 'none' }}></Col>
                <Col style={{ background: 'none' }}></Col>
              </Row>
            </div>
            <div className="addroom-5">
              <Row>
                <Col onClick={() => amnetiesFun('Pool View')} className={amneties.includes("Pool View") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Pool View.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Pool View</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('In Room Movies')} className={amneties.includes("In Room Movies") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/In Room Movies.png" alt="" />
                  </Row>
                  <Row>
                    <h6>In Room Movies</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('Instant Hot Water')} className={amneties.includes("Instant Hot Water") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Instant Hot Water.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Instant Hot Water</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('Minibar')} className={amneties.includes("Minibar") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Minibar.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Minibar</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('On the Beach')} className={amneties.includes("On the Beach") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/On the Beach.png" alt="" />
                  </Row>
                  <Row>
                    <h6>On the Beach</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('Outdoor Space')} className={amneties.includes("Outdoor Space") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Outdoor Space.png" alt="" />
                  </Row>
                  <Row> 
                    <h6>Outdoor Space</h6>
                  </Row>
                </Col>
                <Col style={{ background: 'none' }}></Col>
                <Col style={{ background: 'none' }}></Col>
              </Row>
            </div>
            <div className="addroom-5">
              <Row>
                <Col onClick={() => amnetiesFun('Private Bathroom')} className={amneties.includes("Private Bathroom") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Private Bathroom.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Private Bathroom</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('Private Pool')} className={amneties.includes("Private Pool") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Private Pool.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Private Pool</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('Safe')} className={amneties.includes("Safe") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Safe.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Safe</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('Sea View')} className={amneties.includes("Sea View") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Sea View.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Sea View</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('Seperate toilet area')} className={amneties.includes("Seperate toilet area") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Seperate toilet area.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Seperate toilet area</h6>
                  </Row>
                </Col>
                <Col onClick={() => amnetiesFun('Shower')} className={amneties.includes("Shower") ? "amneties-active" : null}>
                  <Row>
                    <img src="../assets/image/Shower.png" alt="" />
                  </Row>
                  <Row>
                    <h6>Shower</h6>
                  </Row>
                </Col>
                <Col style={{ background: 'none' }}></Col>
                <Col style={{ background: 'none' }}></Col>
              </Row>
            </div>

            <Row style={{ paddingTop: '30px' }}>
              <h1>Add Price</h1>
            </Row>
            <Row className="addprice">
              <Col>
                <h2>Room</h2>
                <div className="price">
                  <img src="../assets/image/dollar.png" alt="" />
                  <input
                    type="number"
                    id="price1"
                    placeholder="Enter the amount"
                    required
                    onChange={(e) => setPrice1(e.target.value)}
                  />
                </div>
              </Col>
              <Col>
                <h2>Room with Breakfast</h2>
                <div className="price">
                  <img src="../assets/image/dollar.png" alt="" />
                  <input
                    type="number"
                    id="price2"
                    placeholder="Enter the amount"
                    required
                    onChange={(e) => setPrice2(e.target.value)}
                  />
                </div>
              </Col>
              <Col></Col>
            </Row>

            <Row style={{ paddingTop: '30px' }} className="addprice">
              <Col>
                <h2>Room with Breakfast + Lunch/Dinner</h2>
                <div className="price">
                  <img src="../assets/image/dollar.png" alt="" />
                  <input
                    type="number"
                    id="price3"
                    required
                    onChange={(e) => setPrice3(e.target.value)}
                    placeholder="Enter the amount"
                  />
                </div>
              </Col>
              <Col>
                <h2>Room with Breakfast + Lunch+Dinner</h2>
                <div className="price">
                  <img src="../assets/image/dollar.png" alt="" />
                  <input
                    type="number"
                    id="price4"
                    required
                    onChange={(e) => setPrice4(e.target.value)}
                    placeholder="Enter the amount"
                  />
                </div>
              </Col>
              <Col></Col>
            </Row>

            <Row className="addproperty-4">
              <button type="submit">Submit</button>
            </Row>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default AddRoom;
