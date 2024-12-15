import React, { useEffect } from 'react'
import '../../style/Common.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//import { error } from 'jquery';

function EditEnquiry() {
  const {register,handleSubmit,reset,setValue,formState:{errors}}=useForm();
  const{applicant_Id}=useParams();
  const editData=Enquiry=>{
    axios.put(`http://localhost:9091/enquiry/updateCibilStatus/${applicant_Id}`,Enquiry)
    .then(response=>{
      alert("Enquiry Updated...")
      reset();
    }) 
    .catch(error=>{
      console.log("Error while updating:", error)
    });
  }
  const getSingleData=()=>{

    axios.get(`http://localhost:9091/enquiry/getsingledata/${applicant_Id}`)
    .then(res=>{
      for(let prop in res.data){
        setValue(prop,res.data[prop])
      }
    })
  }
  useEffect(getSingleData,[])
  return (
    <div className='d-flex justify-content-center'>
      
    <div className='bg-white w-50 mt-3 p-3'>
      <h1 className='text-center fs-3 text-primary'>Edit Enquiry details..</h1>

      <form onSubmit={handleSubmit(editData)}>
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
        <label className='form-label' >Enter  CibilID</label>
        <input type='text' {...register('cibilScore.cibilId')} className='form-control border border-dark'></input>
        </div>
         
        <div>
        <label className='form-label'>Enter  cibilScore</label>
        <input type='text'  {...register('cibilScore.cibilScore')} className='form-control border border-dark'></input>
        </div>

        <div>
        <label className='form-label'  >Enter  cibil status</label>
        <input type='text'  {...register('cibilScore.status')} className='form-control border border-dark'></input>
        </div>

        <div>
        <label className='form-label' >Enter cibilScoreDateandTime</label>
        <input type='text'   {...register('cibilScore.cibilScoreDateandTime')} className='form-control border border-dark'></input>
        </div> 

        <div>
        <label className='form-label' >Enter Remark</label>
        <input type='text'   {...register('cibilScore.remark')} className='form-control border border-dark'></input>
        </div> 

        
        <button className='btn btn-success mt-4'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default EditEnquiry;