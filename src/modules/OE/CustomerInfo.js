import React from 'react'

 const CustomerInfo = ({ nextStep, formData, handleChange }) => {
    return (
      <div>
        <h2>Customer Details..</h2>
        <div>
          <label>Customer Name:</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer Date Of Birth:</label>
          <input
            type="text"
            name="customerDateOfBirth"
            value={formData.customerDateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer Age:</label>
          <input
            type="text"
            name="customerAge"
            value={formData.customerAge}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Required Tenure:</label>
          <input
            type="text"
            name="requiredTenure"
            value={formData.requiredTenure}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer Gender:</label>
          <input
            type="text"
            name="customerGender"
            value={formData.customerGender}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer Email:</label>
          <input
            type="text"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer Mobile Number:</label>
          <input
            type="text"
            name="customerMobileNumber"
            value={formData.customerMobileNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Customer Additional Mobile Number:</label>
          <input
            type="text"
            name="customerAdditionalMobileNumber"
            value={formData.customerAdditionalMobileNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer Amount Paid For Home:</label>
          <input
            type="text"
            name="customerAmountPaidForHome"
            value={formData.customerAmountPaidForHome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer Total Loan Required:</label>
          <input
            type="text"
            name="customerTotalLoanRequired"
            value={formData.customerTotalLoanRequired}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Loan Status:</label>
          <input
            type="text"
            name="loanStatus"
            value={formData.loanStatus}
            onChange={handleChange}
          />
        </div>

       
        <button onClick={nextStep}>Next</button>
      </div>
    );
}
export default CustomerInfo
;