import { createBrowserRouter } from 'react-router-dom';

import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import BlogPage from '../pages/BlogPage';
import HomePage from '../pages/HomePage';
import BlogDetailsPage from '../pages/BlogDetailsPage';
        
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
        path:'blog',
        element:<BlogPage title="Blog" />,
    },
    {
        path:'blog-details',
        element: <BlogDetailsPage title="Blog Details" />
    }


])
