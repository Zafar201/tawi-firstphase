import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  addRoom,
  detailsProperty,
  detailsRoom,
  getRooms,
  getRoomsDetails,
  updateRoom,
} from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import axios from 'axios'

function EditRoom() {
  const params = useParams();
  const { roooms, setRoooms } = useState(false);
  const { id: propertyId } = params;
  const [name, setName] = useState('');
  const [occupancy, setOccupancy] = useState('');
  const [adult, setAdult] = useState('');
  const [child, setChild] = useState('');
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('');
  const [bedType, setBedType] = useState('');
  const [amenities, setAmenities] = useState([]);
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();


  const roomDetails = useSelector((state) => state.roomDetails);
  const { loading, error, room } = roomDetails;

  const roomUpdate = useSelector((state) => state.roomUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = roomUpdate;

  useEffect(() => {
    if (successUpdate) {
      navigate(`/property/${propertyId}`);
 
    }
    if (!room || successUpdate || room._id !== location.state) {
      dispatch(detailsRoom(propertyId, location.state));
    }
    if (!loading && !error) {
      setName(room.name);
      setOccupancy(room.address);
      setAdult(room.adult);
      setChild(room.child);
      setDescription(room.description);
      setSize(room.size);
      setBedType(room.bedType);
      setAmenities(room.amenities);
      setFirst(room.price.first);
      setSecond(room.price.second);
      setThird(room.price.third);
      setFourth(room.price.fourth);
    }


  }, [dispatch, propertyId, location.state, room, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateRoom({
        propId: propertyId,
        roomId: location.state,
        name,
        description,
        adult,
        child,
        size,
        bedType,
        amenities,
        price: { first, second, third, fourth },
      })
    );
  };

  const amnetiesFun = (a) => {
    if (amenities.includes(a)) {
      setAmenities(amenities.filter((item) => item !== a));
    } else {
      setAmenities([...amenities, a]);
    }
    // console.log(amenities);
  };


  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('room-image', file);
    setLoadingUpload(true); 
    try {
      const { data } = await axios.post(`https://tawi-backend.herokuapp.com/api/users/room-upload/?propId=${propertyId}&roomId=${location.state}`,bodyFormData ,{
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      // console.log(data)
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
      // console.log(error.message)
      // console.log(image,'dt')
    }
  };
  return (
    <div>
      <div className="admin-nav">
        <Container>
          <Row>
            <Col className="admin-logo">
              <Link to="/">
                <img src="/assets/image/log2.png" alt="" />
              </Link>
            </Col>
            <Col>
              <img
                style={{ float: 'right' }}
                src="/assets/image/profile.png"
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
        <div className="addproperty">
          <Container>
            <Row>
              <Col>
              <h1>Edit Room:{room.name}</h1>
              </Col>
              <Col className='add-img'>
              <button onClick={() => navigate(`/addimage/propId/${propertyId}/roomId/${location.state}`)}>Add images</button>
             </Col>
            </Row>
            <form onSubmit={submitHandler}>
              <Row>
                <Col>
                  <h2>Room name </h2>
                  <input
                    type="text"
                    id="name"
                    defaultValue={room.name}
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
                  defaultValue={room.description}
                  onChange={(e) => setDescription(e.target.value)}
                  cols="25"
                  rows="10"
                ></textarea>
              </Row>

          

              <Row className="addroom-4">
                <Col>
                  <h2>Adualt</h2>
                  <input
                    type="number"
                    id="adult"
                    placeholder="Enter numbers"
                    required
                    defaultValue={room.adult}
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
                    defaultValue={room.child}
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
                    defaultValue={room.size}
                    // required
                    onChange={(e) => setSize(e.target.value)}
                  />
                </Col>
                <Col>
                  <h2>Bed Type</h2>
                  <select
                    name="cars"
                    id="cars"
                    onChange={(e) => setBedType(e.target.value)}
                  >
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
                  <Col
                    onClick={() => amnetiesFun('Air conditioner')}
                    className={
                      amenities.includes('Air conditioner') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Air conditioner.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Air conditioner</h6>
                    </Row>
                  </Col>

                  <Col
                    onClick={() => amnetiesFun('Bathrobe')}
                    className={
                      amenities.includes('Bathrobe') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Bathrobe.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathrobe</h6>
                    </Row>
                  </Col>

                  <Col
                    onClick={() => amnetiesFun('Bathroom amneties')}
                    className={
                      amenities.includes('Bathroom amneties') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Bathroom amneties.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathroom amneties</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub')}
                    className={
                      amenities.includes('Bathtub') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Bathtub.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bidet')}
                    className={
                      amenities.includes('Bidet') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Bidet.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bidet</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('CableSatellite Television')}
                    className={
                      amenities.includes('CableSatellite Television') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>CableSatellite Television</h6>
                    </Row>
                  </Col>
                  <Col style={{ background: 'none' }}></Col>
                  <Col style={{ background: 'none' }}></Col>
                </Row>
              </div>
              <div className="addroom-5">
                <Row>
                  <Col
                    onClick={() => amnetiesFun('Coffe Tea maker')}
                    className={
                      amenities.includes('Coffe Tea maker') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Coffe Tea maker.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Coffe Tea maker</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Fire Alarm')}
                    className={
                      amenities.includes('Fire Alarm') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Fire Alarm.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Fire Alarm</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Hair Dryer')}
                    className={
                      amenities.includes('Hair Dryer') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Hair Dryer.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Hair Dryer</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('High Definition (HD) Flat panel Television')}
                    className={
                      amenities.includes('High Definition (HD) Flat panel Television') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/High Definition (HD) Flat panel Television.png" alt="" />
                    </Row>
                    <Row>
                      <h6>HD Flat panel Television</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Housekeeping service')}
                    className={
                      amenities.includes('Housekeeping service') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Housekeeping service.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Housekeeping service</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Closets in room')}
                    className={
                      amenities.includes('Closets in room') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Closets in room.png" alt="" />
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
                  <Col
                    onClick={() => amnetiesFun('Pool View')}
                    className={
                      amenities.includes('Pool View') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Pool View.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Pool View</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('In Room Movies')}
                    className={
                      amenities.includes('In Room Movies') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/In Room Movies.png" alt="" />
                    </Row>
                    <Row>
                      <h6>In Room Movies</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Instant Hot Water')}
                    className={
                      amenities.includes('Instant Hot Water') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Instant Hot Water.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Instant Hot Water</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Minibar')}
                    className={
                      amenities.includes('Minibar') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Minibar.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Minibar</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('On the Beach')}
                    className={
                      amenities.includes('On the Beach') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/On the Beach.png" alt="" />
                    </Row>
                    <Row>
                      <h6>On the Beach</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Outdoor Space')}
                    className={
                      amenities.includes('Outdoor Space') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Outdoor Space.png" alt="" />
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
                  <Col
                    onClick={() => amnetiesFun('Private Bathroom')}
                    className={
                      amenities.includes('Private Bathroom') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Private Bathroom.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Private Bathroom</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Private Pool')}
                    className={
                      amenities.includes('Private Pool') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Private Pool.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Private Pool</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Safe')}
                    className={
                      amenities.includes('Safe') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Safe.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Safe</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Sea View')}
                    className={
                      amenities.includes('Sea View') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Sea View.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Sea View</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Seperate toilet area')}
                    className={
                      amenities.includes('Seperate toilet area') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Seperate toilet area.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Seperate toilet area</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Shower')}
                    className={
                      amenities.includes('Shower') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/Shower.png" alt="" />
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
                    <img src="/assets/image/dollar.png" alt="" />
                    <input
                      type="text"
                      id="price1"
                      placeholder="Enter the amount"
                      // required
                      defaultValue={room.price.first}
                      onChange={(e) => setFirst(e.target.value)}
                    />
                  </div>
                </Col>
                <Col>
                  <h2>Room with Breakfast</h2>
                  <div className="price">
                    <img src="/assets/image/dollar.png" alt="" />
                    <input
                      type="text"
                      id="price2"
                      placeholder="Enter the amount"
                      defaultValue={room.price.second}
                      onChange={(e) => setSecond(e.target.value)}
                    />
                  </div>
                </Col>
                <Col></Col>
              </Row>

              <Row style={{ paddingTop: '30px' }} className="addprice">
                <Col>
                  <h2>Room with Breakfast + Lunch/Dinner</h2>
                  <div className="price">
                    <img src="/assets/image/dollar.png" alt="" />
                    <input
                      type="text"
                      id="price3"
                      // required
                      defaultValue={room.price.third}
                      onChange={(e) => setThird(e.target.value)}
                      placeholder="Enter the amount"
                    />
                  </div>
                </Col>
                <Col>
                  <h2>Room with Breakfast + Lunch+Dinner</h2>
                  <div className="price">
                    <img src="/assets/image/dollar.png" alt="" />
                    <input
                      type="text"
                      id="price4"
                      // required
                      defaultValue={room.price.fourth}
                      onChange={(e) => setFourth(e.target.value)}
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
      )}
    </div>
  );
}

export default EditRoom;
