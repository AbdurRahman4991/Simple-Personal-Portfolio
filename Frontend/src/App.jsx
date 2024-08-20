import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

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
