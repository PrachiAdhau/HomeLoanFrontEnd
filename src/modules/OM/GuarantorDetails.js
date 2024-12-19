import React from 'react'

 const GuarantorDetails = ({ nextStep, prevStep, formData, handleChange }) => {
    return (
      <div>
        <h2>Customer Guarantor Details</h2>
        <div>
          <label>Guarantor Name:</label>
          <input
            type="text"
            name="guarantorName"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Guarantor Date Of Birth:</label>
          <input
            type="text"
            name="guarantorDateOfBirth"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Guarantor Relationship with Customer:</label>
          <input
            type="text"
            name="guarantorRelationshipwithCustomer"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Guarantor Mobile Number:</label>
          <input
            type="text"
            name="guarantorMobileNumber"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Guarantor AdharCard No:</label>
          <input
            type="text"
            name="guarantorAdharCardNo"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Guarantor Mortgage Details:</label>
          <input
            type="text"
            name="guarantorMortgageDetails"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Guarantor Job Details:</label>
          <input
            type="text"
            name="guarantorJobDetails"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Guarantor Loacl Address:</label>
          <input
            type="text"
            name="guarantorLoaclAddress"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Guarantor Permanent Address:</label>
          <input
            type="text"
            name="guarantorPermanentAddress"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );
}
export default GuarantorDetails;
