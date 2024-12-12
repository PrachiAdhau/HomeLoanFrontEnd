import React from 'react'
import { Link } from 'react-router-dom';
import '../style/SideNav.css'

function SideNav() {
    let userJson=  localStorage.getItem('user')
    const {usertype}      =JSON.parse(userJson);
  
    let options={
       
        OM:[
                {lable :'Add Employee', to:'add-employee'},
                {lable :'View Employies', to:'view-employies'}
                
              ]   
    }
  
    return (
      <div  className='nav-container'>
          
          {
               
              options[usertype].map((btn,index)=><Link key={index} className='btn btn-light mt-3' to={btn.to}>{btn.lable}</Link>)
          }
         
      </div>
    )
}

export default SideNav;