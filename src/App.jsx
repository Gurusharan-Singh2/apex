import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import Contact from './pages/Contact'
import MyProfile from'./pages/MyProfile'
import Navbar from './components/Navbar'
import About from './pages/About'
import './App.css'
import Footer from './components/Footer'
import Signup from './pages/Signup'
import EditProfile from './pages/EditProfile'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className=' mx-4 sm:mx-[10%]'>
    <Navbar></Navbar>
      
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors></Doctors>} />
        <Route path='/doctors/:speciality' element={<Doctors></Doctors>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/edit' element={<EditProfile></EditProfile>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/my-profile' element={<MyProfile></MyProfile>} />
        <Route path='/my-appointments' element={<MyAppointments></MyAppointments>} />
        <Route path='/appointment/:docId' element={<Appointment></Appointment>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App