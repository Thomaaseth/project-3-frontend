import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import AllArt from './pages/AllArt/AllArt'
import AddArt from './pages/AddArt/AddArt'
import EditArt from './pages/EditArt/EditArt'
import Art from './pages/Art/Art'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import ProtectedRoute from './pages/Navigation/ProtectedRoutes'
import IsLoggedOut from './pages/Navigation/IsLoggedOut'
import MyProfile from './pages/MyProfile/MyProfile'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<AllArt />} />
          <Route element={<IsLoggedOut />} >
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Route>
          <Route element={<ProtectedRoute />} >
            <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/add-new-art' element={<AddArt />} />
            <Route path='/art/:id' element={<Art />} />
            <Route path='/edit-art/:id' element={<EditArt />} />
          </Route>
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </div >
  )
}

export default App
