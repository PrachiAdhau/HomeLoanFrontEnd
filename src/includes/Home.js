
import React from 'react'
import Header from '../templates/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import AboutUs from '../templates/AboutUs'
import Enquiry from '../templates/Enquiry'
import Contact from '../templates/Contact'
import EMICalculator from '../templates/EMICalculator'
import Signin from '../templates/Signin'
import '../style/Common.css';
import Footer from './Footer'
import Slider from './Slider'

function Home() {
  return (
    <div>
<Header/>
<div className='templates'>
    <Routes>
        {/* <Route path='/' element={<Navigate to={'aboutus'}/>}></Route> */}
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/enquiry' element={<Enquiry/>}></Route>
        <Route path='contactus' element={<Contact/>}></Route>
        <Route path='emicalculator' element={<EMICalculator/>}></Route>
        <Route path='signin' element={<Signin/>}></Route>
    
    </Routes>
</div>
<Slider/>
{/* <Footer/> */}
    </div>
  )
}



export default Home;