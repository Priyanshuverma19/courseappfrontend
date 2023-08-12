import { configureStore } from "@reduxjs/toolkit";
import { profileReducer, subscriptionReducer, useReducer } from "./reducers/userReducer";
import { courseReducer } from "./reducers/courseReducer";




const store = configureStore({
    reducer:{
        user:useReducer,
        profile:profileReducer,
        courses:courseReducer,
        subscription:subscriptionReducer,
    },
})

export default store;

export const server= "https://courseapp-henna.vercel.app/api/v1";
