import {UN_SUSPEND_USER_REQUEST,UN_SUSPEND_USER_SUCCESS,UN_SUSPEND_USER_FAIL,UN_SUSPEND_USER_RESET,ADMIN_SIGNOUT,SUSPEND_USER_REQUEST,SUSPEND_USER_SUCCESS,SUSPEND_USER_FAIL,SUSPEND_USER_RESET,GET_ALL_APPROVED_USER_REQUEST,GET_ALL_APPROVED_USER_SUCCESS,GET_ALL_APPROVED_USER_FAIL,CREATE_PASSWORD_REQUEST,CREATE_PASSWORD_SUCCESS,CREATE_PASSWORD_FAIL,CREATE_PASSWORD_RESET, APPROVE_BOOKING_FAIL, APPROVE_BOOKING_REQUEST, APPROVE_BOOKING_RESET, APPROVE_BOOKING_SUCCESS,APPROVE_USER_REQUEST,APPROVE_USER_SUCCESS,APPROVE_USER_FAIL,APPROVE_USER_RESET, COUNT_LIST_FAIL, COUNT_LIST_REQUEST, COUNT_LIST_SUCCESS, GET_BOOKING_LIST_FAIL, GET_BOOKING_LIST_REQUEST, GET_BOOKING_LIST_SUCCESS, GET_SIGNUP_REQUEST,GET_SIGNUP_SUCCESS,GET_SIGNUP_FAIL, REJECT_BOOKING_FAIL, REJECT_BOOKING_REQUEST, REJECT_BOOKING_RESET, REJECT_BOOKING_SUCCESS ,REJECT_USER_REQUEST,REJECT_USER_SUCCESS,REJECT_USER_FAIL,REJECT_USER_RESET, ADMIN_SIGNIN_REQUEST, ADMIN_SIGNIN_SUCCESS, ADMIN_SIGNIN_FAIL} from "../constants/adminConstants";

export const countListReducer = (state = { loading:true,count:[] }, action) => {
    switch (action.type) {
      case COUNT_LIST_REQUEST:
        return { loading: true };
      case COUNT_LIST_SUCCESS:
        return { loading: false, count: action.payload }; 
      case COUNT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const bookingListReducer = (state = { loading:true,property:[] }, action) => {
    switch (action.type) {
      case GET_BOOKING_LIST_REQUEST:
        return { loading: true };
      case GET_BOOKING_LIST_SUCCESS:
        return { loading: false, property: action.payload }; 
      case GET_BOOKING_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const approveBookingReducer= (state= {}, action)=>{
    switch(action.type){
      case APPROVE_BOOKING_REQUEST:
        return {loading:true};
      case APPROVE_BOOKING_SUCCESS:
        return {loading:false,success:true};
      case APPROVE_BOOKING_FAIL:
        return {loading:false,error:action.payload}
      case APPROVE_BOOKING_RESET:
        return {};
      default:
        return state;        
    }
  }


  export const rejectBookingReducer= (state= {}, action)=>{
    switch(action.type){
      case REJECT_BOOKING_REQUEST:
        return {loading:true};
      case REJECT_BOOKING_SUCCESS:
        return {loading:false,success:true};
      case REJECT_BOOKING_FAIL:
        return {loading:false,error:action.payload}
      case REJECT_BOOKING_RESET:
        return {};
      default:
        return state;        
    }
  }


  export const getSignupRequestReducer=(state={loading:true,users:[]},action)=>{
    switch(action.type){
      case GET_SIGNUP_REQUEST:
        return {loading:true};
      case GET_SIGNUP_SUCCESS:
        return {loading:false,users:action.payload.users};
      case GET_SIGNUP_FAIL:
        return {loading:false,error:action.payload}
      
      default:
        return state;        
    }
  }

  export const userApproveReducer= (state= {}, action)=>{
    switch(action.type){
      case APPROVE_USER_REQUEST:
        return {loading:true};
      case APPROVE_USER_SUCCESS:
        return {loading:false,success:true};
      case APPROVE_USER_FAIL:
        return {loading:false,error:action.payload}
      case APPROVE_USER_RESET:
        return {};
      default:
        return state;        
    }
  }

  
  export const userRejectReducer= (state= {}, action)=>{
    switch(action.type){
      case REJECT_USER_REQUEST:
        return {loading:true};
      case REJECT_USER_SUCCESS:
        return {loading:false,done:true};
      case REJECT_USER_FAIL:
        return {loading:false,error:action.payload}
      case REJECT_USER_RESET:
        return {};
      default:
        return state;        
    }
  }

  export const passwordCreateReducer= (state= {}, action)=>{
    switch(action.type){
      case CREATE_PASSWORD_REQUEST:
        return {loading:true};
      case CREATE_PASSWORD_SUCCESS:
        return {loading:false,success:true, userInfo:action.payload};
      case CREATE_PASSWORD_FAIL:
        return {loading:false,error:action.payload}
      case CREATE_PASSWORD_RESET:
        return {};
      default:
        return state;        
    }
  }


  export const getAllUsersApproved=(state={loading:true},action)=>{
    switch(action.type){
      case GET_ALL_APPROVED_USER_REQUEST:
        return {loading:true};
      case GET_ALL_APPROVED_USER_SUCCESS:
        return {loading:false,users:action.payload};
      case GET_ALL_APPROVED_USER_FAIL:
        return {loading:false,error:action.payload}   
      default:
        return state;        
    }
  }


  export const userSuspendReducer= (state= {}, action)=>{
    switch(action.type){
      case SUSPEND_USER_REQUEST:
        return {loading:true};
      case SUSPEND_USER_SUCCESS:
        return {loading:false,success:true,message:action.payload};
      case SUSPEND_USER_FAIL:
        return {loading:false,error:action.payload}
      case SUSPEND_USER_RESET:
        return {};
      default:
        return state;        
    }
  }

  export const adminSigninReducer = (state = {}, action) => {
    switch (action.type) {
      case ADMIN_SIGNIN_REQUEST:
        return { loading: true };
      case ADMIN_SIGNIN_SUCCESS:
        return { loading: false, adminInfo: action.payload };
      case ADMIN_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      case ADMIN_SIGNOUT:
        return {};
      default:
        return state;
    }
  };

  export const unSuspendReducer= (state= {}, action)=>{
    switch(action.type){
      case UN_SUSPEND_USER_REQUEST:
        return {loading:true};
      case UN_SUSPEND_USER_SUCCESS:
        return {loading:false,success:true,message:action.payload};
      case UN_SUSPEND_USER_FAIL:
        return {loading:false,error:action.payload}
      case UN_SUSPEND_USER_RESET:
        return {};
      default:
        return state;        
    }
  }