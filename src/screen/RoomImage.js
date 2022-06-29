import React ,{useState , useEffect} from 'react'
import "./Imagebox.css";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams} from 'react-router-dom';
import ImageUploading from 'react-images-uploading';
import Swal from 'sweetalert2';
import { Col, Container, Row } from 'react-bootstrap';
import { deleteRoomImg, detailsRoom } from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


function RoomImage() {
    const params = useParams();
    const {propId,roomId} = params;
    const [deleteLoading,setDeleteLoading]=useState(false)
    const [selectedImages, setSelectedImages] = useState([]);
    const [successUpload, setSuccessUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');
    const dispatch = useDispatch() 
    const [images, setImages] =useState([]);
    // console.log(propId,roomId)
    const roomDetails = useSelector((state) => state.roomDetails);
    const { loading, error, room } = roomDetails;
    const navigate = useNavigate()
   
    const maxNumber = 15;
    
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      // console.log(imageList, addUpdateIndex);  
      setImages(imageList);
    };
    const uploadimages = () =>
    {
          for(var a = 0; a<images.length; a++)
          {
            const fd = new FormData();
            //console.log(images[a])
            fd.append('room-image', images[a]['file']);
          
            //Post Request to Nodejs API Route
            axios.post(`https://tawi-backend.herokuapp.com/api/users/room-upload/?propId=${propId}&roomId=${roomId}`, fd,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                  },
            }
            ).then(res=>
            {
              //Success Message in Sweetalert modal
              Swal.fire({
                title: 'Images hava been uploaded successfully.',
                text: "Thanks",
                type: 'success',            
              });      
              setSuccessUpload(true)
              // navigate(`/property/${propId}`);

            }).catch(err=>{
                console.log(err)
            });
          }       
    }

    useEffect(()=>{
        dispatch(detailsRoom(propId,roomId));     
        
    },[dispatch,deleteLoading,successUpload])

    const deleteHandler=(imageId)=>{
      console.log(propId,roomId,imageId)
      // dispatch(deleteRoomImg(propId,roomId,imageId))
      axios.post('https://tawi-backend.herokuapp.com/api/users/room-delete',{
        propId:propId,
        roomId,
        imageId
      }).then(function (response) {
         console.log(response,'res');
         Swal.fire({
           title: 'Image hava been deleted successfully.',
           text: `thanks`,
           type: 'success',            
         });  
         setDeleteLoading(true)
       })
       .catch(function (error) {
         console.log(error,'er');
       });
    }

  return (
    <div className="App">   
    <h1>Room Images</h1> 
    {loading ? <LoadingBox></LoadingBox>:
    error ? <MessageBox>{error}</MessageBox>:(

<>
    
    <Container>
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
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
                <button className="btn btn-primary" onClick={() => onImageUpdate(index)}>Edit</button>
                <button className="btn btn-danger" onClick={() => onImageRemove(index)}>Remove</button>
              </div>
            </Col>
          ))}

        {room.images.length !== 0 && room.images.map((image, index) => (
            <Col md={3} key={index} className="image-item mt-5 mb-5 mr-5">
              <img src={image.location} />
              <div className="image-item__btn-wrapper">
                {/* <button className="btn btn-primary" onClick={() => onImageUpdate(index)}>Update</button> */}
                <button className="btn btn-danger" onClick={() => deleteHandler(image._id)}>Delete</button>
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

export default RoomImage