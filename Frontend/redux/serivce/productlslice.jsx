import { api } from '../api/baseApi'

export const aboutSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: (token) => `about`,
      providesTags : ["about"]
    }),
    getBlog: builder.query({
      query: () => `blog`,
      providesTags : ["blog"]
    }),

    getSingleBlog: builder.query({
      query: (id) => `single/blog/${id}`,
      providesTags : ["single/blog"]
    }),

    getContact: builder.query({
      query: () => `contact`,
      providesTags : ["contact"]
    }),
        
    createAndUpdateAbout: builder.mutation({
      query: data => ({
        url: 'about',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['about']
    }),

    createContact: builder.mutation({
      query: data => ({
        url: 'contact',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['about']
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAboutQuery, useCreateAndUpdateAboutMutation, 
               useGetBlogQuery, useGetSingleBlogQuery, useCreateContactMutation,
               useGetContactQuery, 
} = aboutSlice