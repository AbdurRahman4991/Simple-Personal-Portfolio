import { createBrowserRouter } from 'react-router-dom';

import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import BlogPage from '../pages/BlogPage';
import HomePage from '../pages/HomePage';
import BlogDetailsPage from '../pages/BlogDetailsPage';
import { useGetSingleBlogQuery } from '../../redux/serivce/productlslice';
import LayoutPage from '../pages/admin/LayoutPage';
import AdminAboutPage from '../pages/admin/AdminAboutPage';

        
export const route = createBrowserRouter ([
    {
        path:'/',
        element:<HomePage />
    },
    {
        path: '/about',
        element: <AboutPage title="About" />,
    },
    {
        path: '/contact',
        element: <ContactPage title={"Contact"} />
    },
    {
        path:'/blog',
        element:<BlogPage title="Blog" />,
    },
    {
        path:'/blog/:title',
        element: <BlogDetailsPage title="Blog Details" />
    },

    {
        path:'/admin',
        element: <LayoutPage />,
        children : [
            {
                path:'/admin',
                element: <AdminAboutPage />, 
            },
            {
                path:'/admin/about-admin',
                element: <AdminAboutPage />, 
            }
        ]


 
    },

])
