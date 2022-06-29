import axios from "axios";
import {DELETE_PROPIMG_REQUEST,DELETE_PROPIMG_SUCCESS,DELETE_PROPIMG_FAIL, ADD_PROPERTIES_FAIL, ADD_PROPERTIES_REQUEST, ADD_PROPERTIES_SUCCESS, ADD_ROOM_FAIL, ADD_ROOM_REQUEST, ADD_ROOM_SUCCESS, CHECK_PROPERTIES_FAIL, CHECK_PROPERTIES_REQUEST, CHECK_PROPERTIES_SUCCESS, CHECK_PROPERty_FAIL, CHECK_PROPERty_REQUEST, CHECK_PROPERty_SUCCESS, CONFIRM_BOOING_FAIL, CONFIRM_BOOING_REQUEST, CONFIRM_BOOING_SUCCESS, CREATE_ACCOUNT_FAIL, CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_SUCCESS, DELETE_PROPERTIES_FAIL, DELETE_PROPERTIES_REQUEST, DELETE_PROPERTIES_SUCCESS, DELETE_ROOM_FAIL, DELETE_ROOM_REQUEST, DELETE_ROOM_SUCCESS, GET_ROOMS_DETAILS_FAIL, GET_ROOMS_DETAILS_REQUEST, GET_ROOMS_DETAILS_SUCCESS, GET_ROOM_DETAILS_FAIL, GET_ROOM_DETAILS_REQUEST, GET_ROOM_DETAILS_SUCCESS, PROPERTIES_DETAILS_FAIL, PROPERTIES_DETAILS_REQUEST, PROPERTIES_DETAILS_SUCCESS, PROPERTIES_LIST_FAIL, PROPERTIES_LIST_REQUEST, PROPERTIES_LIST_SUCCESS, ROOM_DETAILS_FAIL, ROOM_DETAILS_REQUEST, ROOM_DETAILS_SUCCESS, UPDATE_PROPERTIES_FAIL, UPDATE_PROPERTIES_REQUEST, UPDATE_PROPERTIES_SUCCESS, UPDATE_ROOM_FAIL, UPDATE_ROOM_REQUEST, UPDATE_ROOM_SUCCESS, URL, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, DELETE_ROOMIMG_REQUEST, DELETE_ROOMIMG_SUCCESS, DELETE_ROOMIMG_FAIL } from "../constants/generalConstants";

export const listProperties = () => async (dispatch,getState) => {
    dispatch({ type: PROPERTIES_LIST_REQUEST });
    
    const {
      userSignin: { userInfo },
    } = getState();
    try {    
      const { data } = await axios.get('https://tawi-backend.herokuapp.com/api/users/get-properties',{
        headers: { "x-auth-token": `${userInfo.token}` },
      })      
      dispatch({ type: PROPERTIES_LIST_SUCCESS, payload: data.properties }); 

    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PROPERTIES_LIST_FAIL, payload: message });
  
    }
  };
 
  export const addproperty = (name,address,location,map,description) =>async(dispatch,getState)=>{
    dispatch({type:ADD_PROPERTIES_REQUEST,payload:name,address,location,map,description});
    const {
      userSignin: { userInfo },
    } = getState();

    try{
        const {data} =await axios.post("https://tawi-backend.herokuapp.com/api/users/add-property",{name,address,location,map,description},{
          headers: { "x-auth-token": `${userInfo.token}` },
        })
        dispatch({type:ADD_PROPERTIES_SUCCESS,payload:data})

    }catch(error){
        dispatch({type:ADD_PROPERTIES_FAIL,payload:error.message})
    }
}


export const deleteProperty = (propertytId) => async (dispatch,getState) => {
  dispatch({ type: DELETE_PROPERTIES_REQUEST, payload: propertytId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await axios.delete(`https://tawi-backend.herokuapp.com/api/users/delete-property/${propertytId}`,{
      headers: { "x-auth-token": `${userInfo.token}` },
    })
     
    dispatch({ type: DELETE_PROPERTIES_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DELETE_PROPERTIES_FAIL, payload: message });
  }
};

export const detailsProperty = (propertyId) => async (dispatch,getState) => {
  dispatch({ type: PROPERTIES_DETAILS_REQUEST, payload: propertyId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.get(`https://tawi-backend.herokuapp.com/api/users/get-property/${propertyId}`,{
      headers: { "x-auth-token": `${userInfo.token}` },
    });
    dispatch({ type: PROPERTIES_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROPERTIES_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};  

export const updateProperty=(property)=>async(dispatch,getState)=>{
  dispatch({type:UPDATE_PROPERTIES_REQUEST,property});
  const { userSignin: { userInfo },} = getState();
  try{
    const {data} = await axios.put(`${URL}/api/users/update-property/${property._id}`,property,{
      headers: { "x-auth-token": `${userInfo.token}` },
    })
    dispatch({type:UPDATE_PROPERTIES_SUCCESS,payload:data});
  }catch(error){
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
     dispatch({ type: UPDATE_PROPERTIES_FAIL, payload: message });
  }
}

export const addRoom = (name,description,adult,child,size,bedType,amenities,first,second,third,fourth,propId) =>async(dispatch,getState)=>{
    dispatch({type:ADD_ROOM_REQUEST,payload:name,description,adult,child,size,bedType,amenities,price:{first,second,third,fourth},propId});

    const {
      userSignin: { userInfo },
    } = getState();
    try{
        const {data} = await axios.post('https://tawi-backend.herokuapp.com/api/users/add-room',{name,description,adult,child,size,bedType,amenities,price:{first,second,third,fourth},propId},{
          headers: { "x-auth-token": `${userInfo.token}` },
        })
         dispatch({type:ADD_ROOM_SUCCESS,payload:data})
  
    }catch(error){
      const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
     dispatch({ type: ADD_ROOM_FAIL,payload: message });
    }
}
export const getRoomsDetails = (propertyId) => async (dispatch,getState) => {
  dispatch({ type: GET_ROOMS_DETAILS_REQUEST, payload: propertyId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.get(`https://tawi-backend.herokuapp.com/api/users/get-rooms/${propertyId}`,{
      headers: { "x-auth-token": `${userInfo.token}` },
    });
    dispatch({ type: GET_ROOMS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ROOMS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};  

export const detailsRoom = (propId,roomId) => async(dispatch,getState)=>{
  dispatch({type:ROOM_DETAILS_REQUEST,propId,roomId});
  const {
    userSignin: { userInfo },
  } = getState();
  try{
     const {data} = await axios.get(`https://tawi-backend.herokuapp.com/api/users/get-a-room/id?propId=${propId}&roomId=${roomId}`,{
      headers: { "x-auth-token": ` ${userInfo.token}` },
     })
     dispatch({type:ROOM_DETAILS_SUCCESS,payload:data})
 
  }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: ROOM_DETAILS_FAIL, payload: message });
      }
  }

  
  export const deleteRooms = (propId,roomId) => async (dispatch,getState) => {
    dispatch({ type: DELETE_ROOM_REQUEST ,propId,roomId});
    const {
      userSignin: { userInfo },
    } = getState();
    try {
    const {data}=  await axios.delete(`https://tawi-backend.herokuapp.com/api/users/delete-room/id?propId=${propId}&roomId=${roomId}`,{
      headers: { "x-auth-token": ` ${userInfo.token}` },
    })
       
      dispatch({ type: DELETE_ROOM_SUCCESS ,payload:data.room});
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: DELETE_ROOM_FAIL, payload: message });
    }
  };


  export const updateRoom=(room)=>async(dispatch,getState)=>{
    dispatch({type:UPDATE_ROOM_REQUEST,room});
    const {
      userSignin: { userInfo },
    } = getState();
    try{
      const {data} = await axios.put('https://tawi-backend.herokuapp.com/api/users/update-room/',room,{
        headers: { "x-auth-token": ` ${userInfo.token}` },
      })
      dispatch({type:UPDATE_ROOM_SUCCESS,payload:data});
    
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: UPDATE_ROOM_FAIL, payload: message });

    }
  }
  

  export const checkProperty = (location,adult,child,from,to) =>async(dispatch)=>{
    dispatch({type:CHECK_PROPERTIES_REQUEST,payload:location,adult,child,from,to});

    try{
        const {data} =await axios.post("https://tawi-backend.herokuapp.com/api/clients/check-availability",{location,adult,child,from,to},)
        dispatch({type:CHECK_PROPERTIES_SUCCESS,payload:data})

    }catch(error){
        dispatch({type:CHECK_PROPERTIES_FAIL,payload:error.message})
    }
}



export const confirmBooking = (propId,roomId,name,email,code,phone,country,from,to,price) =>async(dispatch)=>{
  dispatch({type:CONFIRM_BOOING_REQUEST,propId,roomId,name,email,phone,country,from,to,price});

  try{
      const {data} =await axios.post("https://tawi-backend.herokuapp.com/api/clients/confirm-booking",{propId,roomId,name,email,phone:code+phone,country,from,to,price})
      dispatch({type:CONFIRM_BOOING_SUCCESS,payload:data})

  }catch(error){
      dispatch({type:CONFIRM_BOOING_FAIL,payload:error.message})
  }
}


export const createAccount=( f_name,l_name,email,phone,address)=>async(dispatch)=>{
   dispatch({type:CREATE_ACCOUNT_REQUEST, f_name,l_name,email,phone,address})
   try{
     const {data}=await axios.post("https://tawi-backend.herokuapp.com/api/users/signup",{ f_name,l_name,email,phone,address})
     dispatch({type:CREATE_ACCOUNT_SUCCESS,payload:data})
   }catch(error){
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
     dispatch({ type: CREATE_ACCOUNT_FAIL, payload: error.response.data.message })

   }
}


export const signIn =(email,password)=>async(dispatch)=>{
  dispatch({type:USER_SIGNIN_REQUEST,payload:{email,password}});
  try{
    const {data}= await axios.post("https://tawi-backend.herokuapp.com/api/users/login",{email,password})
    dispatch({type:USER_SIGNIN_SUCCESS,payload:data});
    localStorage.setItem('userInfo', JSON.stringify(data));
  }catch(error){
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
     dispatch({ type: USER_SIGNIN_FAIL, payload: message })
  }
}

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_SIGNOUT });
  // document.location.href = '/signin';
};


export const deletePropImg=(propId,imageId)=>async(dispatch)=>{
  dispatch({type:DELETE_PROPIMG_REQUEST,propId,imageId});
  console.log(propId,imageId,'gnr')
  try {
  const {data}=await axios.post('https://tawi-backend.herokuapp.com/api/users/property-delete',propId,imageId)  
    dispatch({type:DELETE_PROPIMG_SUCCESS,payload:data});
  }catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DELETE_PROPIMG_FAIL, payload: message });
  }
};

// export const deleteimg=(propId,imageId)=>async(dispatch)=>{
//   const {data}=await axios.post('https://tawi-backend.herokuapp.com/api/users/property-delete',propId,imageId)
//   dispatch({type:DELETE_PROPIMG_SUCCESS,payload:data})
// }

export const deleteRoomImg = (propId,roomId,imageId) => async (dispatch) => {
  dispatch({ type: DELETE_ROOMIMG_REQUEST ,propId,roomId,imageId});
  try {
  const {data}=  await axios.delete(`https://tawi-backend.herokuapp.com/api/users/room-delete`,propId,roomId,imageId)   
    dispatch({ type: DELETE_ROOMIMG_SUCCESS ,payload:data});
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DELETE_ROOMIMG_FAIL, payload: message });
  }
};