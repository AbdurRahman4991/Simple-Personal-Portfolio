import { createBrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import BlogPage from '../pages/BlogPage';
import HomePage from '../pages/HomePage';
import BlogDetailsPage from '../pages/BlogDetailsPage';
import LayoutPage from '../pages/admin/LayoutPage';
import AdminAboutPage from '../pages/admin/AdminAboutPage';
import AdminContactPage from '../pages/admin/AdminContactPage';
import AdminBlogPage from '../pages/admin/AdminBlogPage';

export const route = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/about',
        element: <AboutPage title="About" />,
    },
    {
        path: '/contact',
        element: <ContactPage title="Contact" />
    },
    {
        path: '/blog',
        element: <BlogPage title="Blog" />,
    },
    {
        path: '/blog/:title',
        element: <BlogDetailsPage title="Blog Details" />
    },
    {
        path: '/admin',
        element: <LayoutPage />,
        children: [
            {
                path: 'about-admin', // Relative path
                element: <AdminAboutPage />,
            },
            {
                path: 'admin-contact', // Relative path
                element: <AdminContactPage />
            },
            {
                path: 'admin-blog', // Relative path
                element: <AdminBlogPage />
            }
        ]
    },
]);
