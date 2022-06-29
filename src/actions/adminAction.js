import {UN_SUSPEND_USER_REQUEST,UN_SUSPEND_USER_SUCCESS,UN_SUSPEND_USER_FAIL,ADMIN_SIGNOUT,SUSPEND_USER_REQUEST,SUSPEND_USER_SUCCESS,SUSPEND_USER_FAIL,GET_ALL_APPROVED_USER_REQUEST,GET_ALL_APPROVED_USER_SUCCESS,GET_ALL_APPROVED_USER_FAIL,CREATE_PASSWORD_REQUEST,CREATE_PASSWORD_SUCCESS,CREATE_PASSWORD_FAIL, APPROVE_BOOKING_FAIL, APPROVE_BOOKING_REQUEST, APPROVE_BOOKING_SUCCESS, APPROVE_USER_REQUEST,APPROVE_USER_SUCCESS,APPROVE_USER_FAIL, COUNT_LIST_FAIL, COUNT_LIST_REQUEST, COUNT_LIST_SUCCESS, GET_BOOKING_LIST_FAIL, GET_BOOKING_LIST_REQUEST, GET_BOOKING_LIST_SUCCESS, GET_SIGNUP_FAIL, GET_SIGNUP_REQUEST, GET_SIGNUP_SUCCESS, REJECT_BOOKING_FAIL, REJECT_BOOKING_REQUEST, REJECT_BOOKING_SUCCESS, ADMIN_SIGNIN_REQUEST, ADMIN_SIGNIN_SUCCESS, ADMIN_SIGNIN_FAIL, REJECT_USER_REQUEST, REJECT_USER_SUCCESS, REJECT_USER_FAIL } from "../constants/adminConstants";
import axios from 'axios'
import { URL, USER_SIGNIN_SUCCESS } from "../constants/generalConstants";

export const getCountDetails = () => async (dispatch,getState) => {
    dispatch({ type: COUNT_LIST_REQUEST });
    const {
      adminSignin: { adminInfo },
    } = getState();
    try {
      const { data } = await axios.get(`${URL}/api/admin/`,{
        headers: { "x-auth-token": `${adminInfo.token}` }, 
      });
      dispatch({ type: COUNT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: COUNT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };  

  export const getBookings = () => async (dispatch,getState) => {
    dispatch({ type: GET_BOOKING_LIST_REQUEST });
    const {
      adminSignin: { adminInfo },
    } = getState();
    try {
      const { data } = await axios.get(`${URL}/api/admin/get-all-bookings/`,{
        headers: { "x-auth-token": `${adminInfo.token}` }, 
      });
      dispatch({ type: GET_BOOKING_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_BOOKING_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };  

  export const approveBooking=(bookId)=>async(dispatch,getState)=>{
    dispatch({type:APPROVE_BOOKING_REQUEST});
    const {
      adminSignin: { adminInfo },
    } = getState();
    // console.log(adminInfo.token)
    try{
      const {data} = await axios.put(`${URL}/api/admin/approve-booking/${bookId}`)
      dispatch({type:APPROVE_BOOKING_SUCCESS,payload:data});
     
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: APPROVE_BOOKING_FAIL, payload: message });
    }
  }

  export const rejectBooking=(bookId)=>async(dispatch,getState)=>{
    dispatch({type:REJECT_BOOKING_REQUEST});
    const {
      adminSignin: { adminInfo },
    } = getState();
    try{
      const {data} = await axios.put(`${URL}/api/admin/reject-booking/${bookId}`)
      dispatch({type:REJECT_BOOKING_SUCCESS,payload:data});
     
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: REJECT_BOOKING_FAIL,payload: message });
    }
  }

  export const getSignUpRequest=()=>async(dispatch,getState)=>{
    dispatch({type:GET_SIGNUP_REQUEST})
    const {
      adminSignin: { adminInfo},
    } = getState(); 
    
    try{
      const {data}= await axios.get(`${URL}/api/admin/get-signup-requests`,{
        headers: { "x-auth-token": `${adminInfo.token}` }, 
      })
      dispatch({type:GET_SIGNUP_SUCCESS,payload:data})
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: GET_SIGNUP_FAIL, payload: message });
    
    }
  }

  export const approveUser=(userId)=>async(dispatch,getState)=>{
    dispatch({type:APPROVE_USER_REQUEST});
    const {adminSignin: { adminInfo },} = getState();
    // console.log(adminInfo.token)
    try{
      const {data} = await axios.put(`${URL}/api/admin/approve-user/${userId}`,)
 
      dispatch({type:APPROVE_USER_SUCCESS,payload:data});
     
    }catch(error){
   
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: APPROVE_USER_FAIL, payload: message });
    }
  }

  export const rejectUser=(userId)=>async(dispatch,getState)=>{
    dispatch({type:REJECT_USER_REQUEST});
    const {
      adminSignin: { adminInfo },
    } = getState();
    try{
      const {data} = await axios.put(`${URL}/api/admin/reject-user/${userId}`)
      dispatch({type:REJECT_USER_SUCCESS,payload:data});
     
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: REJECT_USER_FAIL, payload: message });
    }
  }

  export const createPassword=(password,userId)=>async(dispatch)=>{
    dispatch({type:CREATE_PASSWORD_REQUEST});
   
    console.log(password,userId)
    try{
      const {data} = await axios.put(`${URL}/api/users/update-password/${userId}`,{password})
      dispatch({type:CREATE_PASSWORD_SUCCESS,payload:data});
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
     
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: CREATE_PASSWORD_FAIL, payload: message });
    }
  }

  export const getAllApprovedUsers=()=>async(dispatch,getState)=>{
    dispatch({type:GET_ALL_APPROVED_USER_REQUEST})
    const {
      adminSignin: { adminInfo },
    } = getState();
    try{
      const {data}= await axios.get(`${URL}/api/admin/get-all-users`,{
        headers: { "x-auth-token": ` ${adminInfo.token}` }, 
      })
      dispatch({type:GET_ALL_APPROVED_USER_SUCCESS,payload:data.users})
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: GET_ALL_APPROVED_USER_FAIL, payload: message });
    
    }
  }

  export const suspendUser=(userId)=>async(dispatch,getState)=>{
    dispatch({type:SUSPEND_USER_REQUEST});
    const {
      adminSignin: { adminInfo },
    } = getState();
    try{
      const {data} = await axios.put(`${URL}/api/admin/suspend-user/${userId}`)
      dispatch({type:SUSPEND_USER_SUCCESS,payload:data});
     
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: SUSPEND_USER_FAIL, payload: message });
    }
  }

  export const adminSignIn =(email,password)=>async(dispatch)=>{
    dispatch({type:ADMIN_SIGNIN_REQUEST,payload:{email,password}});
    try{
      const {data}= await axios.post(`${URL}/api/admin/login`,{email,password})
      dispatch({type:ADMIN_SIGNIN_SUCCESS,payload:data});
      localStorage.setItem('adminInfo', JSON.stringify(data));
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: ADMIN_SIGNIN_FAIL, payload: message })
    }
  }

  export const adminSignout = () => (dispatch) => {
    localStorage.removeItem('adminInfo');
    dispatch({ type: ADMIN_SIGNOUT });
    // document.location.href = '/signin';
  };

  export const unSuspendUser=(userId)=>async(dispatch,getState)=>{
    dispatch({type:UN_SUSPEND_USER_REQUEST});
    const {
      adminSignin: { adminInfo },
    } = getState();
    try{
      const {data} = await axios.put(`${URL}/api/admin/remove-suspend-user/${userId}`)
      dispatch({type:UN_SUSPEND_USER_SUCCESS,payload:data});
     
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: UN_SUSPEND_USER_FAIL, payload: message });
    }
  }