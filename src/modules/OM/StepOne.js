import React from 'react'

 const StepOne = ({ nextStep,prevStep, formData, handleChange }) => {
    return (
      <div>
        <h2>Local Address</h2>
        <div>
          <label>Area name:</label>
          <input
            type="text"
            name="areaname"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City name:</label>
          <input
            type="text"
            name="cityname"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>District:</label>
          <input
            type="text"
            name="district"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>House Number:</label>
          <input
            type="text"
            name="houseNumber"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Street Name:</label>
          <input
            type="text"
            name="streetName"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );
}
export default StepOne