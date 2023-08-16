
// const initialState = {
//   isLoggedIn: false,
//     userData: null,
//     token: null,
    
//   };
  
//   const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//       // case 'SET_USER_DATA':
//       case 'LOGIN_SUCCESS':
//         return {
//           ...state,
//           isLoggedIn: true,
//           userData: action.payload.userData,
//           token:action.payload.token,
//           // userData: action.payload,
//         };
//         case 'LOGOUT':
//           return{
//             ...state,
//             isLoggedIn: false,
//             userData: null,
//             token: null,
//           };


//       default:
//         return state;
//     }
//   };
//   // userReducer({type: 'setid', id:1});
//   // userReducer({type: 'setUserName', uname:'Harish'});
  
//   export default userReducer;
  