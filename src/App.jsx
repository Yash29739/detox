import React from 'react'
import NavBar from './components/NavBar'
import { Route,Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Resources from './components/pages/Resources'
import Schedules from './components/pages/Schedules'
import Tracker from './components/pages/Tracker';
import LogIn from './components/auth/LogIn'
import '../src/index.css' 

const App = () => {
  return (
      <div className='contain'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/schedules" element={<Schedules/>}/>
          <Route path="/tracker" element={<Tracker/>}/>
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
  )
}

export default App