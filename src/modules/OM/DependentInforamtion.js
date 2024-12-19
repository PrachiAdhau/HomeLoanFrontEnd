
import React from 'react'

const DependentInforamtion = ({ nextStep, prevStep,formData, handleChange }) => {
    
    return (
      <div>
        <h2>Dependent Inforamtion</h2>
        
        <div>
          <label>No Of Family Member:</label>
          <input
            type="text"
            name="noOfFamilyMember"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>No Of Child:</label>
          <input
            type="text"
            name="noOfChild"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Marital Status:</label>
          <input
            type="text"
            name="maritalStatus"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Dependent Member:</label>
          <input
            type="text"
            name="dependentMember"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Family Income:</label>
          <input
            type="text"
            name="familyIncome"
            value={formData.name}
            onChange={handleChange}
          />
        </div>   
        <button onClick={prevStep}>Back</button>    
        <button onClick={nextStep}>Next</button>
        
        
      </div>
      
    );
}


export default DependentInforamtion