import React, { Component } from 'react'


import { Route, Routes } from 'react-router-dom';
import SideNav from './SideNav';
import ViewEmployee from '../employee/ViewEmployee';
import AddEmployee from '../employee/AddEmployee';

function Dashboard() {
    let userJson = localStorage.getItem('user');
        const {usertype} =JSON.parse(userJson)
        const appRoutes={
            OM:[
                {path:'/add-employee',component:<AddEmployee/>},
                {path:'/view-employee',component:<ViewEmployee/>}
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