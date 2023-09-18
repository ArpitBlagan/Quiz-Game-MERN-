import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseUrl='http://localhost:5000/game';
export const quesApi=createApi({
    reducerPath:'ques',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints(builder){
        return{
            getQues:builder.mutation({
                query:(val)=>{
                    return{
                        url:'/ques',
                        method:'post',
                        body:val,
                        credentials:"include"
                    }
                }
            }),
            check:builder.mutation({
                query:(val)=>{
                    return{
                        url:'/check',
                        method:'post',
                        body:val,
                        credentials:"include"
                    }
                }
            }),
            upload:builder.mutation({
                query:(val)=>{
                    return{
                        url:'/add',
                        method:'post',
                        body:val,
                        credentials:"include"
                    }
                }
            }),
            upate:builder.mutation({
                query:(val)=>{
                    return{
                        url:'/uploads',
                        method:'put',
                        body:val,
                        credentials:"include"
                    }
                }
            }),
        }
    }
})
export const {useGetQuesMutation,useCheckMutation,useUploadMutation,useUpateMutation}=quesApi;