import { useForm } from 'react-hook-form';
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function SanctionForm(){
   
    const { handleSubmit ,register} = useForm();
    const {customerID} = useParams();
    
        const [customer,setCustomer]=useState([]);
    
    const sanctionData=()=>{
        axios.put(`http://localhost:9095/generatedPdf/${customerID}`)
        .then((res)=>setCustomer(res.data))
        
    }
    console.log(customer);
    

    return(
    
        <div className='d-flex justify-content-center'>
    <div className='card w-50 text-center mt-1 ps-5 pe-5'>

          <form onSubmit={handleSubmit(sanctionData)}>

          <div className='mb-4'>
            <label className='form-label'>Enetr employee name</label>
            <input type='text'   className='form-control border border-dark' {...register('applicantName',{required:false})}></input>
          </div>

          <div className='mb-4'>
            <label className='form-label'>Enetr contact details</label>
            <input type='text'   className='form-control border border-dark' {...register('contactDetails',{required:false})}></input>
          </div>
           
          <div className='mb-4'>
            <label className='form-label'>Enetr producthomeEquity</label>
            <input type='text'   className='form-control border border-dark' {...register('producthomeEquity',{required:false})}></input>
          </div>

          <div className='mb-4'>
            <label className='form-label'>Enetr loanAmtSanctioned</label>
            <input type='text'   className='form-control border border-dark' {...register('loanAmtSanctioned',{required:false})}></input>
          </div>
          
          <div className='mb-4'>
            <label className='form-label'>Enetr interestType</label>
            <input type='text'   className='form-control border border-dark' {...register('interestType',{required:false})}></input>
          </div>
          
          <div className='mb-4'>
            <label className='form-label'>Enetr rateOfInterest</label>
            <input type='text'   className='form-control border border-dark' {...register('rateOfInterest',{required:false})}></input>
          </div>

       <div className='mb-4'>
            <label className='form-label'>Enetr loanTenureInMonth</label>
            <input type='text'   className='form-control border border-dark' {...register('loanTenureInMonth',{required:false})}></input>
          </div>
          
         <div className='mb-4'>
            <label className='form-label'>Enetr monthlyEmiAmount</label>
            <input type='text'   className='form-control border border-dark' {...register('monthlyEmiAmount',{required:false})}></input>
          </div>
 
          
 <div className='mb-4'>
            <label className='form-label'>Enetr modeOfPayment</label>
            <input type='text'   className='form-control border border-dark' {...register('modeOfPayment',{required:false})}></input>
          </div>
          
 <div className='mb-4'>
            <label className='form-label'>Enetr remarks</label>
            <input type='text'   className='form-control border border-dark' {...register('remarks',{required:false})}></input>
          </div>
          
 <div className='mb-4'>
            <label className='form-label'>Enetr termsCondition</label>
            <input type='text'   className='form-control border border-dark' {...register('termsCondition',{required:false})}></input>
          </div>
          
<div className='mb-4'>
            <label className='form-label'>Enetr status</label>
            <input type='text'   className='form-control border border-dark' {...register('status',{required:false})}></input>
          </div>
          <div className='mb-2'>
                <button onClick={sanctionData}>Generate sanction</button>
               
              </div>
          
            
        </form>
    </div>        
    </div>

    )
}
export default SanctionForm;