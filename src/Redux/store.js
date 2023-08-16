// store.js

// import { createStore, combineReducers } from 'redux';
// import userReducer from './userReducer';

// const rootReducer = combineReducers({
//   user: userReducer,
// });

// const store = createStore(rootReducer);

// // export default store;

// import {createStore} from 'redux'
// import {createSlice, configureStore} from '@reduxjs/toolkit'
// import rootReducer from './rootReducer'

// const counterSlice = createSlice({
//     name:'counter',
//     initialState:{
//         userData:null
//     },
//     reducers:{

//     }
// })

// export default store;

// store.js



// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import loginReducer from './loginSlice';

// const store = configureStore({
//   reducer: {
//     login: loginReducer, 
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    // ...other reducers
  },
});

export default store;

