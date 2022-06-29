import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { addproperty, addProperty } from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function AddProperty() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [map, setMap] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');
  const dispatch = useDispatch();

  const propertyCreate = useSelector((state) => state.propertyCreate);
  const { loading, error, success, newproperty } = propertyCreate;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addproperty(name, address, location, map, description));
    navigate('/dashboard');
  };
  const uploadFileHandler=()=>{

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
            <h1>Add Property</h1>
          </Row>
          {/* {loading && <LoadingBox></LoadingBox>} */}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <form onSubmit={submitHandler}>
            <Row>
              <Col>
                <h2>Name of property</h2>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col>
                <h2>Address</h2>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Address"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Col>

              <Col>
              <h2>location</h2>
                <select
                  name="location"
                  id="location"
                  required
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="not selected">Please Select</option>
                  <option value="kerala">kerala</option>
                  <option value="maldives">maldives</option>
                  <option value="jammu">jammu</option>
                </select>
              </Col>
              <Col>
                <h2>Map</h2>
                <input
                  type="text"
                  id="map"
                  placeholder="Enter map"
                  required
                  onChange={(e) => setMap(e.target.value)}
                />
              </Col>
            </Row>

            <Row style={{ paddingTop: '30px' }}>
              <h2>
                Description <span>(100-140 words)</span>
              </h2>
              <textarea
                name="description"
                id="description"
                placeholder="Enter name"
                onChange={(e) => setDescription(e.target.value)}
                cols="25"
                rows="10"
              ></textarea>
            </Row>

            {/* <Row>
              <Col className="addproperty-2" >
                <button >
                  <img src="../assets/image/cam.png" alt="" />
                  Add images <span>(upto 15 images)</span>
                </button>
                <h3>delete image</h3>
                <label htmlFor="image">Image</label>
                <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
              
              </Col>

              <Col>
              <label htmlFor="imageFile">Image File</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              
              </Col>

              <Col className="addproperty-3" md={{ span: 6, offset: 1 }}>
                <div style={{ backgroundColor: 'white' }}></div>
                <div style={{ backgroundColor: ' #EBEBEB' }}></div>
                <div style={{ backgroundColor: ' #E3E3E3;' }}></div>
                <div style={{ backgroundColor: '#A7A6A6' }}></div>
              </Col>
            </Row> */}

            <Row className="addproperty-4">
              <button>Submit</button>
            </Row>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default AddProperty;
