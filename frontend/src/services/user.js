import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseUrl='http://localhost:5000/game';
export const userApi=createApi({
    reducerPath:'user',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints(builder){
        return {
            register:builder.mutation({
                query:(val)=>{
                    return{
                        url:'/register',
                        method:'post',
                        body:val,
                        credentials:"include"
                    }
                }
            }),
            login:builder.mutation({
                query:(val)=>{
                    return{
                        url:'/login',
                        method:'post',
                        body:val,
                        credentials:"include"
                    }
                }
            }),
            logout:builder.query({
                query:()=>{
                    return{
                        url:'/logout',
                        credentials:"include"
                    }
                }
            }),
            score:builder.query({
                query:()=>{
                    return{
                        url:'/board'
                    }
                }
            }),
            progress:builder.query({
                query:()=>{
                    return {
                        url:'/score',
                        credentials:"include"
                    }
                }
            }),
            reset:builder.query({
                query:()=>{
                    return {
                        url:'/reset',
                        credentials:'include'
                    }
                }
            }),
            uploaded:builder.query({
                query:()=>{
                    return {
                        url:'/uploads',
                        credentials:'include'
                    }
                }
            })
        }
    }
});
export const {useUploadedQuery,useResetQuery,useProgressQuery,useRegisterMutation,useLoginMutation,useLogoutQuery,useScoreQuery}=userApi