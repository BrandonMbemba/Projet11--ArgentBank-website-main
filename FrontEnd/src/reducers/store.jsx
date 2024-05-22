import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth.reducers.jsx';
import { userReducer } from './user.reducers.jsx';

const rootReducer = combineReducers({
   auth: authReducer,
   user: userReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true 
})

export default store