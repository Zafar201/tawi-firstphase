import {DELETE_PROPIMG_REQUEST,DELETE_PROPIMG_SUCCESS,DELETE_PROPIMG_FAIL,DELETE_PROPIMG_RESET, PRODUCT_LIST_FAIL,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,ADD_PROPERTIES_FAIL, ADD_PROPERTIES_REQUEST, ADD_PROPERTIES_RESET, ADD_PROPERTIES_SUCCESS, ADD_ROOM_FAIL, ADD_ROOM_REQUEST, ADD_ROOM_RESET, ADD_ROOM_SUCCESS, CHECK_PROPERTIES_FAIL, CHECK_PROPERTIES_REQUEST, CHECK_PROPERTIES_RESET, CHECK_PROPERTIES_SUCCESS, CONFIRM_BOOING_FAIL, CONFIRM_BOOING_REQUEST, CONFIRM_BOOING_RESET, CONFIRM_BOOING_SUCCESS, CREATE_ACCOUNT_FAIL, CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_SUCCESS, DELETE_PROPERTIES_FAIL, DELETE_PROPERTIES_REQUEST, DELETE_PROPERTIES_RESET, DELETE_PROPERTIES_SUCCESS, DELETE_ROOM_FAIL, DELETE_ROOM_REQUEST, DELETE_ROOM_RESET, DELETE_ROOM_SUCCESS, GET_ROOMS_DETAILS_FAIL, GET_ROOMS_DETAILS_REQUEST, GET_ROOMS_DETAILS_SUCCESS, PROPERTIES_DETAILS_FAIL, PROPERTIES_DETAILS_REQUEST, PROPERTIES_DETAILS_SUCCESS, PROPERTIES_LIST_FAIL, PROPERTIES_LIST_REQUEST, PROPERTIES_LIST_SUCCESS, ROOM_DETAILS_FAIL, ROOM_DETAILS_REQUEST, ROOM_DETAILS_SUCCESS, UPDATE_PROPERTIES_FAIL, UPDATE_PROPERTIES_REQUEST, UPDATE_PROPERTIES_RESET, UPDATE_PROPERTIES_SUCCESS, UPDATE_ROOM_FAIL, UPDATE_ROOM_REQUEST, UPDATE_ROOM_RESET, UPDATE_ROOM_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, DELETE_ROOMIMG_REQUEST, DELETE_ROOMIMG_SUCCESS, DELETE_ROOMIMG_FAIL, DELETE_ROOMIMG_RESET } from "../constants/generalConstants";

export const propertyListReducer = (state = { loading:true,properties:[] }, action) => {
    switch (action.type) {
      case PROPERTIES_LIST_REQUEST:
        return { loading: true };
      case PROPERTIES_LIST_SUCCESS:
        return { loading: false, properties: action.payload };
    
      case PROPERTIES_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };




  export const addproperrtyReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case ADD_PROPERTIES_REQUEST:
            return { loading: true }
        case ADD_PROPERTIES_SUCCESS:
            return { loading: false, newproperty: action.payload ,success:true}
        case ADD_PROPERTIES_FAIL:
            return { loading: false, error: action.payload }
        case ADD_PROPERTIES_RESET:
          return {};    
        default:
            return state;
    }
}


export const propertyDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PROPERTIES_REQUEST:
      return { loading: true };
    case DELETE_PROPERTIES_SUCCESS:
      return { loading: false, success: true };
    case DELETE_PROPERTIES_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_PROPERTIES_RESET:
      return {};
    default:
      return state;
  }
};

export const propertyDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case PROPERTIES_DETAILS_REQUEST:
      return { loading: true };
    case PROPERTIES_DETAILS_SUCCESS:
      return { loading: false, property: action.payload.property };
    case PROPERTIES_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const propertyUpdateReducer= (state= {}, action)=>{
  switch(action.type){
    case UPDATE_PROPERTIES_REQUEST:
      return {loading:true};
    case UPDATE_PROPERTIES_SUCCESS:
      return {loading:false,success:true};
    case UPDATE_PROPERTIES_FAIL:
      return {loading:false,error:action.payload}
    case UPDATE_PROPERTIES_RESET:
      return {};
    default:
      return state;        
  }
}


export const addRoomReducer = (state = { loading: true }, action) => {
  switch (action.type) {
      case ADD_ROOM_REQUEST:
          return { loading: true }
      case ADD_ROOM_SUCCESS:
          return { loading: false, newroom: action.payload ,success:true}
      case ADD_ROOM_FAIL:
          return { loading: false, error: action.payload }
      case ADD_ROOM_RESET:
        return {};
      default:
          return state;
  }
}
export const getRoomsDetailsReducer =(state={loading:true,rooms:[]},action)=>{
  switch(action.type){
    case GET_ROOMS_DETAILS_REQUEST:
      return {loading:true}
    case GET_ROOMS_DETAILS_SUCCESS:
      return {loading:false,rooms:action.payload.rooms}
    case GET_ROOMS_DETAILS_FAIL:
      return {loading:false, error:action.payload}
    default:
      return state;      
  }
}


export const roomDetailsReducer =(state={loading:true},action)=>{
  switch(action.type){
    case ROOM_DETAILS_REQUEST:
      return {loading:true}
    case ROOM_DETAILS_SUCCESS:
      return {loading:false,room:action.payload.room}
    case ROOM_DETAILS_FAIL:
      return {loading:false, error:action.payload}
    default:
      return state;      
  }
}

export const roomDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ROOM_REQUEST:
      return { loading: true };
    case DELETE_ROOM_SUCCESS:
      return { loading: false, success: true };
    case DELETE_ROOM_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_ROOM_RESET:
      return {};
    default:
      return state;
  }
};



export const roomUpdateReducer= (state= {}, action)=>{
  switch(action.type){
    case UPDATE_ROOM_REQUEST:
      return {loading:true};
    case UPDATE_ROOM_SUCCESS:
      return {loading:false,success:true};
    case UPDATE_ROOM_FAIL:
      return {loading:false,error:action.payload}
    case UPDATE_ROOM_RESET:
      return {};
    default:
      return state;        
  }
}

export const checkPropertyReducer = (state = { loading: true}, action) => {
  switch (action.type) {
      case CHECK_PROPERTIES_REQUEST:
          return { loading: true }
      case CHECK_PROPERTIES_SUCCESS:
          return { loading: false, prop: action.payload.properties, pri:action.payload.properties }
      case CHECK_PROPERTIES_FAIL:
          return { loading: false, error: action.payload }
      case ADD_PROPERTIES_RESET:
        return {};    
      default:
          return state;
  }
}


export const bookingConfirmReducer = (state = { loading: true }, action) => {
  switch (action.type) {
      case CONFIRM_BOOING_REQUEST:
          return { loading: true }
      case CONFIRM_BOOING_SUCCESS:
          return { loading: false, confirm:action.payload ,success:true}
      case CONFIRM_BOOING_FAIL:
          return { loading: false, error: action.payload }
      case CONFIRM_BOOING_RESET:
        return {};
      default:
          return state;
  }
}

export const accountCreateReducer =(state ={},action)=>{
  switch(action.type){
    case CREATE_ACCOUNT_REQUEST:
     return {loading:true}
    case CREATE_ACCOUNT_SUCCESS:
      return {loading:false,success:true}
    case CREATE_ACCOUNT_FAIL:
      return {loading:false, error:action.payload}

    default:
      return state  
  }

}
   
export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};



export const propImageDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PROPIMG_REQUEST:
      return { loading: true };
    case DELETE_PROPIMG_SUCCESS:
      return { loading: false, success: true};
    case DELETE_PROPIMG_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_PROPIMG_RESET:
      return {};
    default:
      return state;
  }
};


export const roomImageDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ROOMIMG_REQUEST:
      return { loading: true };
    case DELETE_ROOMIMG_SUCCESS:
      return { loading: false, success: true };
    case DELETE_ROOMIMG_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_ROOMIMG_RESET:
      return {};
    default:
      return state;
  }
};