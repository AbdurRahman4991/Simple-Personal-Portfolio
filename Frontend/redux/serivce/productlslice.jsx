// Need to use the React-specific entry point to import createApi

import { api } from '../api/baseApi'

// Define a service using a base URL and expected endpoints
export const aboutSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: (name) => `about`,
      providesTags : ["about"]
    }),
    createAndUpdateAbout: builder.mutation({
      query: data => ({
        url: '/about',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['about']
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAboutQuery, useCreateAndUpdateAboutMutation } = aboutSlice