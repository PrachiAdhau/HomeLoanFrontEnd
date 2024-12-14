import React, { Component } from 'react'
import AddEmployee from '../modules/employee/AddEmployee';
import ViewEmployee from '../modules/employee/ViewEmployee';
import { Route, Routes } from 'react-router-dom';
import SideNav from './SideNav';
import ViewApprovedenq from '../modules/RM/ViewApprovedenq';
import RejectedEnquiry from '../modules/RM/RejectedEnquiry';
import PendingEnquiry from '../modules/RM/PendingEnquiry';
import AddEnquiry from '../modules/RM/AddEnquiry';

function Dashboard() {
   let userJson = localStorage.getItem('user');
        const {usertype} =JSON.parse(userJson)
   



        const appRoutes={
            OM:[
                {path:'/add-employee',component:<AddEmployee/>},
                {path:'/view-employee',component:<ViewEmployee/>}
            ],
            RM:[
              {path:'/view-approved',component:<ViewApprovedenq/>},
              {path:'/rejected-enquiry',component:<RejectedEnquiry/>},
              {path:'/pending-enquiry',component:<PendingEnquiry/>},
              {path:'/add-enquiry',component:<AddEnquiry/>}
      ]
        }
  return (
    <div>
        
        <div className='row w-100 mt-2 m-0'> 
             <div className='col col-3 bg-primary'> 
                <SideNav/>
             </div>
             <div className='col col-9 border border-dark'>
               <Routes>
                {
                                   

                   appRoutes[usertype].map((mapping,index)=> <Route key={index} path={mapping.path} element={mapping.component} />)
                }
                </Routes>
        </div>
        </div>
     
    </div>
  )
}

export default Dashboard