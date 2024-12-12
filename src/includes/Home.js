
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

import Footer from './Footer'
import Slider from '../includes/Slider';


function Home() {
  return (
    <div>
<div className='templates'>
<Slider/>
    <Routes> 
         {/* <Route path='/' element={<Navigate to={'aboutus'}/>}></Route> */}
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/enquiry' element={<Enquiry/>}></Route>
        <Route path='contactus' element={<Contact/>}></Route>
        <Route path='/emi' element={<EMICalculator/>}></Route>
        <Route path='signin' element={<Signin/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
    </Routes>

</div>             

<Footer />
   
</div>

{/* <Footer/> */}

    </div>
  )
}



export default Home;