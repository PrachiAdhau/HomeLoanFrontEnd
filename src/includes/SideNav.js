import React from 'react'
import { Link } from 'react-router-dom';
import '../style/SideNav.css'

function SideNav() {
    let userJson=  localStorage.getItem('user')
    const {usertype}      =JSON.parse(userJson);
  
    let options={
       
        ADMIN:[
                {lable :'Add Employee', to:'/dashboard/add-employee'},
                {lable :'View Employies', to:'/dashboard/view-employies'}
                
              ]   ,
              RM:[
                {lable :'View approved', to:'/dashboard/view-approved'},
                {lable :'rejected enquiry', to:'/dashboard/rejected-enquiry'},
                {lable :'pending enquiry', to:'/dashboard/pending-enquiry'},
                {lable :'add enquiry', to:'/dashboard/add-enquiry'}
              ],
            OM:[
               // {lable :'View-CustomerAddress', to:'/dashboard/view-CustomerAddress'},
                {lable :'View-Customer', to:'/dashboard/view-Customer'}
              ],
              CM:[
                 {lable :'varification-pending', to:'/dashboard/varification-pending'},
                // {lable :'dashboard/single-customer/:customerID', to:'/dashboard/docvarify'}
                {lable :'sanctiongenerate', to:'/dashboard/sanctiongenerate'},
                
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