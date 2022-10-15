// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiSlice = createApi({ 
  reducerPath: 'api', 
  baseQuery: fetchBaseQuery({ baseUrl: 'https://10.1.10.14:5001/' }), 
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getProducts: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: (query) => `odata/store/Category${query}`
    }),
    getProduct:builder.query({
        query:(seName)=>  seName
    })

  })
})
 
export const { useGetProductsQuery , useGetProductQuery} = apiSlice