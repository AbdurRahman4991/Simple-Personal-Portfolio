import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Topbar'
import Hero from './component/Hero';
import About from './component/About';
import Resume from './component/Resume';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Footer from './component/Footer';
import TopBanner from './component/TopBanner';
import BlogDetails from './component/BlogDetails';
import { RouterProvider } from 'react-router-dom';
import { route } from './routes';

function App() {
  return (
    <>
     <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
