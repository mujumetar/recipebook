import { useState } from 'react'

import './App.css'
import Navbars from './components/Navbars'
import Display from './components/display'
// import Login from './components/Login'
// import { Navbar } from 'react-bootstrap'

function App() {
  return (
    <>
      {/* <Login/> */}
      <Navbars />
      <Display/>
    </>
  )
}

export default App
