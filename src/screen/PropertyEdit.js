import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { addproperty, addProperty, detailsProperty, updateProperty } from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { UPDATE_PROPERTIES_RESET } from '../constants/generalConstants';
import axios from 'axios'

function PropertyEdit() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const params = useParams();
  const { id: propertyId} = params;
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [map, setMap] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch()
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');
  const [image, setImage] = useState('');

  const propertyDetails = useSelector(state=>state.propertyDetails)
  const {loading,error,property} = propertyDetails;

  const propertyUpdate= useSelector(state=>state.propertyUpdate)
  const {loading:loadingUpdate,error:errorUpdate,success:successUpdate}=propertyUpdate;
  useEffect(()=>{
    if (successUpdate) {
      navigate('/dashboard');
     
    }
    if(!property || property._id !== propertyId || successUpdate){
      dispatch({type:UPDATE_PROPERTIES_RESET})
        dispatch(detailsProperty(propertyId))
             
    }
    else{
        setName(property.name);
        // setImage(property.imgaes[0].location)
        setAddress(property.address);
        setLocation(property.location);
        setMap(property.map);
        setDescription(property.description);
        // console.log(name,address,map,'edits');
    }   
  },[dispatch,property,propertyId,navigate,successUpdate])
  const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(updateProperty({
      _id:propertyId,
      name,
      address,
      location,
      map,
      description
    }))
  //  console.log(name,address,map,'helooo');
    
  }
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('property-image', file);
    // console.log(file,'fl')
    setLoadingUpload(true); 
    try {
      const { data } = await axios.post(`https://tawi-backend.herokuapp.com/api/users/property-upload/${propertyId}`,bodyFormData ,{
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      // console.log(data,'dt')
      setImage(data);
      // console.log(image,'img')
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    
    }

    // const file = e.target.files[0];
    // const bodyFormData = new FormData();
    // bodyFormData.append('property-image', file)
    

    // axios.post(`http://httpbin.org/anything`,bodyFormData).then(res=>console.log(res)).catch(err=>console.log(err))
  };
  return (
    <div>
          <div className='admin-nav'>
       <Container>
           <Row>
           <Col className='admin-logo'>
               <Link to="/">    
                <img src="../assets/image/log2.png" alt="" />
               </Link>
               </Col>
               <Col >
                 <img style={{float:"right"}} src="../assets/image/profile.png" alt="" />
               </Col>
           </Row>
       </Container>
       </div>

       <div className="addproperty">
         {loading? <LoadingBox></LoadingBox>:
         error? <MessageBox>{error}</MessageBox>:(
          <Container>
          <Row>
              
              <Col>
                 <h1>Property edit:{property.name}</h1>
              </Col>
              <Col className='add-img'>
              <button onClick={() => navigate(`/addimage/${propertyId}`)}>Add images</button>
             </Col>
          </Row>
          {loadingUpdate && <LoadingBox></LoadingBox>}
           {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>} 
          

        <form onSubmit={submitHandler}>
          <Row>
              <Col>
               
              <h2>Name of property</h2>
                <input type="text"
                   id="name"
                   placeholder="Enter name"
                   required
                   value={name}
                   onChange={(e) => setName(e.target.value)}/>
              </Col>
              <Col>
              <h2>Address</h2>
                <input type="text"
                id="address"
                placeholder="Enter Address"
                required
                onChange={(e) => setAddress(e.target.value)}
                value={address}
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
                  <option value={location}>{location}</option>
                  <option value="kerala">kerala</option>
                  <option value="maldives">maldives</option>
                  <option value="jammu">jammu</option>
                </select>
              </Col>
              <Col>
              <h2>Map</h2>
                <input type="text" 
                id="map"
                placeholder="Enter map"
                required
                onChange={(e) => setMap(e.target.value)}
                value={map}/>
                
              </Col>
          </Row>

          <Row style={{paddingTop:"30px"}}>
              <h2>Description <span>(100-140 words)</span></h2>
              <textarea 
               name="description" 
               id="description"
               placeholder="Enter name"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
              cols="25" rows="10"></textarea>
          </Row>
       

          <Row>
          {/* <Col className="addproperty-2" >
               
                <label htmlFor="image">Image</label>
                <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
              
              </Col>

              <Col className="addproperty-2">
              <label htmlFor="imageFile">Image File</label>
              <input
                type="file"
                name='property-image'
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              
              </Col> */}

              {/* <Col className='addproperty-3' md={{span: 6, offset: 1}}>
                  <div style={{backgroundColor:"white"}}>

                  </div>
                  <div style={{backgroundColor:" #EBEBEB"}}>
                      
                  </div>
                  <div style={{backgroundColor:" #E3E3E3;"}}>
                      
                  </div>
                  <div style={{backgroundColor:"#A7A6A6"}}>
                      
                  </div>
              </Col> */}

              
          </Row>
        

          <Row className='addproperty-4'>
              <button type='submit'>Submit</button>
          </Row>
          </form>

          {/* <Row className='addproperty-4'>
              <button >Add images</button>
          </Row> */}
           
          
      </Container>
         )}
           
           
       </div>
    </div>
  )
}

export default PropertyEdit