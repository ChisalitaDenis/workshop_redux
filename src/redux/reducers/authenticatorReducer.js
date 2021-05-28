const initialState = {
  userProfile:{},
  userToken: "",
  error:"",
  isLoading:false,
};

const authenticatorReducer = (state = initialState, action) => {
  switch (action.type) {
      case "LOGIN_WITH_EMAIL_AND_PASSWORD":{
          return{
              ...state,
              userProfile:action.payload.userProfile,
              userToken: action.payload.userToken,
          };
      }
      case "SET_LOADING":{
          return{
              ...state,
              isLoading:action.payload,
          }
      }
      case "ERROR":{
          return{
              ...state,
              error:action.payload
          }
      }
      default:{
          return state;
      }
  }
};

export default authenticatorReducer;