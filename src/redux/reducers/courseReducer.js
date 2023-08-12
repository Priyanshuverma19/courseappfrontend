import {createReducer} from '@reduxjs/toolkit';

export const courseReducer = createReducer({courses:[]},{
    allCoursesRequest:(state)=>{
        state.loading = true;
    },
    allCoursesSuccess:(state,action)=>{
        state.loading = false;
        state.user= action.payload.user;
    },
    allCoursesFail:(state,action)=>{
        state.loading = false;
        state.error=action.payload;
    },
    


})