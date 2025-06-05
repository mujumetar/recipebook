import { useState } from 'react'

import './App.css'
import Navbars from './components/Navbars'
import Display from './components/display'
import AddRecipi from './components/AddRecipi'
import Login from './components/Login'
import { useSelector } from 'react-redux'
import { Routes } from 'react-router-dom'

function App() {
  let auth = useSelector(state => state.auth.auth)
  console.log(auth)
  return (
    <>
      {/* <Login/> */}

      <Login />
      <Navbars />
      <AddRecipi />
      <Display />


    </>
  )
}

export default App
