import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';






const baseQuery = fetchBaseQuery({
  baseUrl: 'http://127.0.0.1:8000/api',
});

export const api = createApi({
  reducerPath: 'api',
  // keepUnusedDataFor: 0,
  baseQuery: baseQuery,
  
  endpoints: () => ({}),
  tagTypes: ["aobut"],
});


export const imageUrl = 'http://192.168.10.185:5001';