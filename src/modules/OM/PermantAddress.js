
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
const PermantAddress = ({ prevStep, formData, handleChange }) => {
const {handleSubmit,reset,register}=useForm();

    
    return (
      <div>
        <h2>Permanent Address</h2>
        {/* <form onSubmit={handleSubmit(saveData)}> */}
        <div>
          <label>Area name:</label>
          <input
            type="text" {...register('areaname')}
            name="areaname"
            value={formData.areaname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City name:</label>
          <input
            type="text" {...register('cityname')}
            name="cityname"
            value={formData.cityname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>District:</label>
          <input
            type="text" {...register('district')}
            name="district"
            value={formData.district}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text" {...register('state')}
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Pincode:</label>
          <input
            type="text" {...register('pincode')}
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>House Number:</label>
          <input
            type="text" {...register('houseNumber')}
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Street Name:</label>
          <input
            type="text" {...register('streetName')}
            name="streetName"
            value={formData.streetName}
            onChange={handleChange}
          />
        </div>
       
        <button onClick={prevStep}>Back</button>
        <button className='btn btn-success mt-3'>submit</button>
        {/* </form> */}
      </div>
      
    );
}


export default PermantAddress