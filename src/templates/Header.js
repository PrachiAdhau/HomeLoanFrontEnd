import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Common.css';

function Header() {
  return (
    <nav className='header-nav'>
      <h1 className='w-25'>Dream HomeLoan mangement system</h1>
    <div className='w-40 ml-auto'>
        <Link className='header-btn me-5' to={'/'}>Home</Link> 
        <Link className='header-btn me-5' to={'/emicalculator'}>EmiCalculator</Link> 
        <Link className='header-btn me-5' to={'/enquiry'}>Enquiry</Link>
        <Link className='header-btn me-5' to={'/aboutus'}>About</Link>
        <Link className='header-btn me-5' to={'/signin'}>Signin</Link>
       
        
    </div>

    </nav>
  )
}

export default Header