import { useState } from 'react'

import './App.css'
import Navbars from './components/Navbars'
import Display from './components/display'
import AddRecipi from './components/AddRecipi'
import Login from './components/Login'
import { useSelector } from 'react-redux'
import { Routes } from 'react-router-dom'
// import Login from './components/Login'
// import { Navbar } from 'react-bootstrap'

function App() {
  let auth = useSelector(state => state.auth.auth)
  return (
    <>
      {/* <Login/> */}

      <Navbars />
      {/* {auth && <Navbar />} */}
      {/* {!auth && <Login />} */}
      <Login />
      <AddRecipi />
      <Display />
    </>
  )
}

export default App
