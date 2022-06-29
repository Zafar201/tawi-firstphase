import React ,{useState,useEffect}from 'react'
import "./Imagebox.css";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { useParams,useNavigate} from 'react-router-dom';
import ImageUploading from 'react-images-uploading';
import Swal from 'sweetalert2';
import { Col, Container, Row } from 'react-bootstrap';
import { deletePropImg, detailsProperty } from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { DELETE_PROPIMG_RESET } from '../constants/generalConstants';


function PropertyImage() {
    const propertyDetails = useSelector(state=>state.propertyDetails)
    const {loading,error,property} = propertyDetails;
    const [selectedImages, setSelectedImages] = useState([]);
    const [deleteLoading,setDeleteLoading]=useState(false)
    const [successLoading,setSuccessLoading]=useState(false)
    const dispatch = useDispatch()
    const params = useParams();
    const { id: propertyId} = params;  
    const [images, setImages] =useState([]);
    const navigate= useNavigate()
    // console.log(propertyId)
   
    const maxNumber = 1;
    
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      
      setImages(imageList);
    };
    const uploadimages = () =>
    {
          for(var a = 0; a<images.length; a++)
          {
            const fd = new FormData();
            //console.log(images[a])
            fd.append('property-image', images[a]['file']);
          
            //Post Request to Nodejs API Route
            axios.post(`https://tawi-backend.herokuapp.com/api/users/property-upload/${propertyId}`, fd,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                  },
            }
            ).then(res=>
            {
              setSuccessLoading(true) 
              console.log('ok',images.length)
              Swal.fire({
                title: 'Images hava been uploaded successfully.',
                text: `thanks `,
                type: 'success',            
              });     
                
            
            }).catch(err=>{
                console.log(err)
            });
          }        
    }

    useEffect(()=>{
        dispatch(detailsProperty(propertyId)) 
        if(deleteLoading){
          dispatch({type:DELETE_PROPIMG_RESET})
        }
           
    },[dispatch,deleteLoading,successLoading])
 
    const deleteHandler=(imageId)=>{
      axios.post('https://tawi-backend.herokuapp.com/api/users/property-delete',{
       propId:propertyId,
       imageId
      })
      .then(function (response) {
        setDeleteLoading(true)
        Swal.fire({
          title: 'Images hava been deleted successfully.',
          text: `thanks`,
          type: 'success',            
        });  
    
      })
      .catch(function (error) {
        console.log(error,'er');
      });
    }
  
  return (
    <div className="App">   
    <h1>Property Images</h1> 
    {loading ? <LoadingBox></LoadingBox>:
    error ? <MessageBox>{error}</MessageBox>:(
<>   
    <Container>
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      // maxNumber={maxNumber - property.images.length}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI

        <Row className="upload__image-wrapper">
          <div className="mainbtndiv">
            <button className="btn btn-primary"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            <button className="btn btn-primary" onClick={() =>navigate('/dashboard')}> Back to Dashboard</button>
            
            {/* <button className="btn btn-danger" onClick={onImageRemoveAll}>Remove all images</button> */}
          </div>
          {imageList.map((image, index) => (
            <Col md={3} key={index} className="image-item mt-5 mb-5 mr-5">
              <img src={image['data_url']} />
              <div className="image-item__btn-wrapper">
                <button className="btn btn-primary" style={{background:"grey",border:"1px grey"}} onClick={() => onImageUpdate(index)}>Edit</button>
                <button className="btn btn-danger" onClick={() => onImageRemove(index)}>Remove</button>
              </div>
            </Col>
          ))}
           {property.images.length !== 0 && property.images.map((image, index) => (
            <Col md={3} key={index} className="image-item mt-5 mb-5 mr-5">
              <img src={image.location} />
              <div className="image-item__btn-wrapper">
                {/* <button className="btn btn-primary" onClick={() => onImageUpdate(index)}>Update</button> */}
                <button className="btn btn-danger" onClick={() =>deleteHandler(image._id)}>delete</button>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </ImageUploading>
    </Container>
  <center>  <button className="btn btn-primary" onClick={() => uploadimages()}>Submit Images</button></center>
  </>
  )}
  </div>
  )
}

export default PropertyImage