import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Topbar'
import Hero from './component/Hero';
import About from './component/About';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
   
   
     
    </>
  )
}

export default App
