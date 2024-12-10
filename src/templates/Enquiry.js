import React from 'react'
import '../style/Common.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Enquiry() {
  const {register,handleSubmit,reset}=useForm();
  const saveData=Enquiry=>{
    axios.post('http://localhost:9091/enquiry/save',Enquiry)
   
  
    .then(res=>{
      if(res.status===201)
      {
        alert("Enquiry details saved..!")
        reset();
      }
    })
    .catch(error=>console.log(error)
    )
  }
  return (
    <div className='d-flex justify-content-center'>
    <div className='bg-white w-50 mt-3 p-3'>
      <h1 className='text-center fs-3 text-primary'>Add Enquiry details..</h1>

      <form onSubmit={handleSubmit(saveData)}>
        {/* <div>
          
        <label className='form-label'>Enter ID</label>
        <input type='number' readOnly {...register('applicant_Id')} className='form-control border border-dark'></input>
        </div> */}
        <div>
        <label className='form-label'>Enter first Name</label>
        <input type='text'  {...register('first_Name')}  className='form-control border border-dark'></input>
        </div>
        <div>
        <label className='form-label'>Enter last_Name</label>
        <input type='text'  {...register('last_Name')} className='form-control border border-dark'></input>
        </div>
        <div>
        <label className='form-label'>Enter  age</label>
        <input type='text'  {...register('age')} className='form-control border border-dark'></input>
        </div>
        <div>
          <label className='form-label'>Enetr  email</label>
          <input type='text' {...register('email')}  className='form-control border border-dark'></input>
        </div>
       
        <div>
          <label className='form-label'>Enetr mobileNo </label>
          <input type='number' {...register('mobileNo')}  className='form-control border border-dark'></input>
        </div>
        <div>
          <label className='form-label'>Enetr alternateMobileNo </label>
          <input type='number' {...register('alternateMobileNo')}  className='form-control border border-dark'></input>
        </div>
        <div>
          <label className='form-label'>Enetr pancardNo </label>
          <input type='text' {...register('pancardNo')}  className='form-control border border-dark'></input>
        </div>
        <div>
          <label className='form-label'>Enetr adharNo </label>
          <input type='number' {...register('adharNo')}  className='form-control border border-dark'></input>
        </div>
        <div>
        <label className='form-label'>Enter  address</label>
        <input type='text'  {...register('address')} className='form-control border border-dark'></input>
        </div>
        <div>
        <label className='form-label'>Enter  city</label>
        <input type='text'  {...register('city')} className='form-control border border-dark'></input>
        </div>
      
         <div>
        <label className='form-label' hidden>Enter  CibilID</label>
        <input type='number' value={0} hidden  {...register('cibilScore.cibilId')} className='form-control border border-dark'></input>
        </div>
         
        <div>
        <label className='form-label'hidden>Enter  cibilScore</label>
        <input type='text'value={0} hidden {...register('cibilScore.cibilScore')} className='form-control border border-dark'></input>
        </div>

        <div>
        <label className='form-label' hidden >Enter  cibil status</label>
        <input type='text' value={'Pending'} hidden {...register('cibilScore.status')} className='form-control border border-dark'></input>
        </div>

        <div>
        <label className='form-label' hidden>Enter cibilScoreDateandTime</label>
        <input type='text' value={0} hidden {...register('cibilScore.cibilScoreDateandTime')} className='form-control border border-dark'></input>
        </div> 

        
        <button className='btn btn-success mt-4'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Enquiry