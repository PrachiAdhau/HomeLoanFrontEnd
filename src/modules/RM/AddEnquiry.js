import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

function AddEnquiry() {
  const {register,handleSubmit,reset}=useForm();
  const saveDate=enquiry=>{
    axios.post('http://localhost:5000/enquiry',enquiry)
    .then(res=>{
      if(res.status===201)
        {
        alert("save details...")
        reset();
      }
      })
      .catch(error=>console.log(error));}
  return (
    <div className='d-flex justify-content-center'>
    <div className='bg-white w-50 mt-4 p-3'>
    
     <h1 className='text-center fs-3 text-primary'>Add producat details...!</h1>
      <form onSubmit={handleSubmit(saveDate)}>
      <div>
        <label className='form-lable'>Enter Applicant Id</label>
        <input type="text" {...register('applicant_Id')}  className='form-control border border-dark'/>
      </div>
      <div>
        <label className='form-lable'>Enter Fist Name</label>
        <input type="text" {...register('first_Name')}className='form-control border border-dark'/>
      </div>
      <div>
        <label className='form-lable'>Enter last Name</label>
        <input type="text" {...register('last_Name')} className='form-control border border-dark'/>
      </div>
      <div>
        <label className='form-lable'>Enter age</label>
        <input type="number" {...register('age')} className='form-control border border-dark'/> 
      </div>
      <div> 
        <label className='form-lable'>Enter mobileNo</label>
        <input type="number" {...register('mobileNo')} className='form-control border border-dark'/>
      </div>
      <div>
        <label className='form-lable'>Enter AlternatemobileNo</label>
        <input type="number" {...register('alternateMobileNo')} className='form-control border border-dark'/>
      </div>
      <div>
        <label className='form-lable'>Enter pancardNo</label>
        <input type="text" {...register('pancardNo')} className='form-control border border-dark'/>
      </div>
      <div>
        <label className='form-lable'>Enter adharNo</label>
        <input type="number" {...register('adharNo')}className='form-control border border-dark'/>
      </div>
      <div>
        <label className='form-lable'>Enter city</label>
        <input type="text"{...register('city')} className='form-control border border-dark'/>
      </div>
      <div>
        <label className='form-lable'>Enter address</label>
         <input type="text"{...register('address')} className='form-control border border-dark'/>
       </div>
       <div>
         <label className='form-lable'>Enter email</label>
         <input type="text"{...register('email')} className='form-control border border-dark'/>
       </div>
       {/* <div className='mt-3'>
         <label className='form-lable me-4'>cibilScore id</label>
         <input type="checkbox" {...register('cibilScore.cibilId')} className='form-control border border-dark'/>
       </div>
       <div className='mt-3'>
         <label className='form-lable me-4'> cibilScore </label>
         <input type="checkbox" {...register('cibilScore.cibilScore')} className='form-control border border-dark'/>
       </div>
       <div className='mt-3'>
         <label className='form-lable me-4'>remark</label> 
         <input type="checkbox" {...register('cibilScore.remark')} className='form-control border border-dark'/>
       </div>
       <div className='mt-3'>
         <label className='form-lable me-4'>status</label>
         <input type="checkbox" {...register('cibilScore.status')} className='form-control  border border-dark'/> 
        </div>
       <div className='mt-3'>
         <label className='form-lable me-4'>cibilScoreDateandTime</label> */}
         {/* <input type="checkbox" {...register('cibilScore.cibilScoreDateandTime')} className='form-control  border border-dark'/> */}
     {/* </div> */}


      <button className='btn btn-success mt-3'>submit</button>
      </form> 
      </div>
  </div>
    )
}

export default AddEnquiry;