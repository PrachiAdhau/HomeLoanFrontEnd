import React from 'react'

 const AccountDetails = ({ nextStep, prevStep, formData, handleChange }) => {
    return (
      <div>
        <h2>Customer Account Details</h2>
        <div>
          <label>Accoun Type:</label>
          <input
            type="text"
            name="accounType"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Account Balance:</label>
          <input
            type="text"
            name="accountBalance"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Account Holder Name:</label>
          <input
            type="text"
            name="accountHolderName"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Account Status:</label>
          <input
            type="text"
            name="accountStatus"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );
}
export default AccountDetails;
;