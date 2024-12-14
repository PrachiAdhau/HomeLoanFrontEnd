
import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Header.css'

function Header() {
  return (
    <nav className='header-nav'>
      {/* <h1 className='w-25'>Dream HomeLoan mangement system</h1> */}
      <img src="https://seeklogo.com/images/H/home-loan-logo-47AE303918-seeklogo.com.png" height={'70px'} width={'100px'} >
      </img>
    <div className='w-40 ml-auto'>

        <Link className='navlink' to={'/home'}>Home</Link> 

        

        <Link className='navlink' to={'/emicalculator'}>EmiCalculator</Link> 
        <Link className='navlink' to={'/enquiry'}>Enquiry</Link>
        <Link className='navlink' to={'/aboutus'}>About</Link>
        <Link className='navlink' to={'/signin'}>Signin</Link>
       <Link className='navlink' to={'/Contact'}>Contact Us</Link>
        
    </div>

    </nav>
  )
}

export default Header
