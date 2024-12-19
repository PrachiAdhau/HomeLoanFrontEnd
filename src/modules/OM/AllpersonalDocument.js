
import React from 'react';

const AllPersonalDocument = ({ nextStep, prevStep, formData, handleChange, handleImageChange }) => {
  return (
    <div>
      <h2> All Personal Documents</h2>
      <div>
        <label>Address Proof:</label>
        <input type="file" name="addressProof" accept="image/*" onChange={handleImageChange} />
        {formData.photo && <img src={formData.addressProof} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
      </div>
      
      <div>
        <label>PanCard:</label>
        <input type="file" name="panCard" accept="image/*" onChange={handleImageChange} />
        {formData.photo && <img src={formData.panCard} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
      </div>
      
      <div>
        <label>IncomeTax:</label>
        <input type="file" name="incomeTax" accept="image/*" onChange={handleImageChange} />
        {formData.photo && <img src={formData.incomeTax} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
      </div>
      <div>
        <label>BankCheque:</label>
        <input type="file" name="addharCard" accept="image/*" onChange={handleImageChange} />
        {formData.photo && <img src={formData.addharCard} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
      </div>
      
      <div>
        <label>Photo:</label>
        <input type="file" name="photo" accept="image/*" onChange={handleImageChange} />
        {formData.photo && <img src={formData.photo} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
      </div>
      
      <div>
        <label>Signature:</label>
        <input type="file" name="signature" accept="image/*" onChange={handleImageChange} />
        {formData.photo && <img src={formData.signature} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
      </div>
     
      <div>
        <label>BankCheque:</label>
        <input type="file" name="bankCheque" accept="image/*" onChange={handleImageChange} />
        {formData.photo && <img src={formData.bankCheque} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
      </div>

      <div>
        <label>SalarySlips:</label>
        <input type="file" name="salarySlips" accept="image/*" onChange={handleImageChange} />
        {formData.photo && <img src={formData.salarySlips} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
      </div>
      
      
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default AllPersonalDocument;
