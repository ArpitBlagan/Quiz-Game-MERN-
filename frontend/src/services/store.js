import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { userApi } from './user';
import { quesApi } from './ques';
const store=configureStore({
    reducer:{
        [userApi.reducerPath]:userApi.reducer,
        [quesApi.reducerPath]:quesApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([userApi.middleware,quesApi.middleware])
});
export default store;