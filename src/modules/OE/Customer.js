import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
function Customer() {
  
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  
  // Function to handle form submission and send the data
  const saveCustomer = (data) => {

    console.log(data)
    // Create a FormData object to handle the image and other employee data
    const formData = new FormData();
   
     // Convert employee details into a JSON string and append it to FormData as 'employeeDetailsJson'
  const customerDetails = {
    customerName: data.customerName,
    customerDateOfBirth: data.customerDateOfBirth,
    customerAge: data.customerAge,
    requiredTenure: data.requiredTenure,
    customerGender: data.customerGender,
    customerEmail: data.customerEmail,
    customerMobileNumber: data.customerMobileNumber,
    customerAdditionalMobileNumber: data.customerAdditionalMobileNumber,
    customerAmountPaidForHome: data.customerAmountPaidForHome,
    customerTotalLoanRequired: data.customerTotalLoanRequired,
    loanStatus: data.loanStatus,

    familydependentInfo:{
        noOfFamilyMember:data.familydependentInfo.noOfFamilyMember,
        noOfChild:data.familydependentInfo.noOfChild,
        maritalStatus:data.familydependentInfo.maritalStatus,
        dependentMember:data.familydependentInfo.dependentMember,
        familyIncome:data.familydependentInfo.familyIncome,
    },

    customerAddress:{
        permanentAddress:{
            areaname:data.customerAddress.permanentAddress.areaname,
            cityname:data.customerAddress.permanentAddress.cityname,
            district:data.customerAddress.permanentAddress.district,
            state:data.customerAddress.permanentAddress.state,
            pincode:data.customerAddress.permanentAddress.pincode,
            houseNumber:data.customerAddress.permanentAddress.houseNumber,
            streetName:data.customerAddress.permanentAddress.streetName
        },
        localAddress:{
            areaname:data.customerAddress.localAddress.areaname,
            cityname:data.customerAddress.localAddress.cityname,
            district:data.customerAddress.localAddress.district,
            state:data.customerAddress.localAddress.state,
            pincode:data.customerAddress.localAddress.pincode,
            houseNumber:data.customerAddress.localAddress.houseNumber,
            streetName:data.customerAddress.localAddress.streetName
        }
    },

    accountdetails:{
        accounType:data.accountdetails.accounType,
        accountBalance:data.accountdetails.accountBalance,
        accountHolderName:data.accountdetails.accountHolderName,
        accountStatus:data.accountdetails.accountStatus,
        accountNumber:data.accountdetails.accountNumber
    },

    gurantordetails:{
        guarantorName:data.gurantordetails.guarantorName,
        guarantorDateOfBirth:data.gurantordetails.guarantorDateOfBirth,
        guarantorRelationshipwithCustomer:data.gurantordetails.guarantorRelationshipwithCustomer,
        guarantorMobileNumber:data.gurantordetails.guarantorMobileNumber,
        guarantorAdharCardNo:data.gurantordetails.guarantorAdharCardNo,
        guarantorMortgageDetails:data.gurantordetails.guarantorMortgageDetails,
        guarantorJobDetails:data.gurantordetails.guarantorJobDetails,
        guarantorLoaclAddress:data.gurantordetails.guarantorLoaclAddress,
        guarantorPermanentAddress:data.gurantordetails.guarantorPermanentAddress
    },

    loandisbursement:{
        // loanNo: data.loanNo,
        // agreementDate: data.agreementDate,
        // amountPayType: data.amountPayType,
        // totalAmount: data.totalAmount,
        // bankName: data.bankName,
        // accountNumber: data.accountNumber,
        // ifsccode: data.ifsccode,
        // accountType: data.accountType,
        // transferAmount: data.transferAmount,
        // paymentStatus: data.paymentStatus,
        // amountPaidDate: data.amountPaidDate
    },

    ledger: [
        {
        //   ledgerCreatedDate: data.ledgerCreatedDate,
        //   totalLoanAmount: data.totalLoanAmount,
        //   payableAmountwithInterest: data.payableAmountwithInterest,
        //   tenure: data.tenure,
        //   monthlyEMI: data.monthlyEMI,
        //   amountPaidtillDate: data.amountPaidtillDate,
        //   remainingAmount: data.remainingAmount,
        //   nextEmiDatestart: data.nextEmiDatestart,
        //   nextEmiDateEnd: data.nextEmiDateEnd,
        //   defaulterCount: data.defaulterCount,
        //   previousEmitStatus: data.previousEmitStatus,
        //   currentMonthEmiStatus: data.currentMonthEmiStatus,
        //   loanEndDate: data.loanEndDate,
        //   loanStatus: data.loanStatus
        }
      ],

      customersanctionletter: {
        // sanctionDate: data.sanctionDate,
        // applicantName: data.applicantName,
        // contactDetails: data.contactDetails,
        // producthomeEquity: data.producthomeEquity,
        // loanAmtSanctioned: data.loanAmtSanctioned,
        // interestType: data.interestType,
        // rateOfInterest: data.rateOfInterest,
        // loanTenureInMonth: data.loanTenureInMonth,
        // monthlyEmiAmount: data.monthlyEmiAmount,
        // modeOfPayment: data.modeOfPayment,
        // remarks: data.remarks,
        // termsCondition: data.termsCondition,
        // status: data.status,
        // sanctionLetter: data.sanctionLetter
      },

      customerverification: {
        // verificationID: data.verificationID,
        // verificationDate: data.verificationDate,
        // status: data.status,
        // remarks: data.remarks
      },

      allpersonalDocument:{
        // addressProof:data.addressProof,
        // pancard:data.pancard,
        // incomeTax:data.incomeTax,
        // addharCard:data.addharCard,
        // photo:data.photo,
        // signature:data.signature,
        // bankCheque:data.bankCheque,
        // salarySlips:data.salarySlips
      }

  };

  // Convert to JSON string
  formData.append('info', JSON.stringify(customerDetails)); 

  formData.append("addressProof", data.allpersonalDocument.addressProof[0]);
  formData.append("pancard", data.allpersonalDocument.pancard[0]);
  formData.append("incomeTax", data.allpersonalDocument.incomeTax[0]);
  formData.append("addharCard", data.allpersonalDocument.addharCard[0]);
  formData.append("photo", data.allpersonalDocument.photo[0]);
  formData.append("signature", data.allpersonalDocument.signature[0]);
  formData.append("bankCheque", data.allpersonalDocument.bankCheque[0]);
  formData.append("salarySlips", data.allpersonalDocument.salarySlips[0]);  
 
    
    
    // Make a POST request to your backend to save the employee
    axios.post('http://localhost:9095/customer/save', formData)
    .then(response => {
      // if (response.status === 200) {
        alert("Customer Registered ...");
        reset(); // Reset form fields after successful submission
      }
    // }
    )
    .catch(error => {
      console.log("Error while saving customer:", error);
    });
  
  };


  return (
    <div className='d-flex justify-content-center'>
      <div className='card w-50 text-center mt-1 ps-5 pe-5'>
        <form onSubmit={handleSubmit(saveCustomer)}>
          <h1 className='text-warning fs-2'>Customer Registration</h1>

          <div className='mb-4'>
            <label className='form-label'>Enter Customer Name</label>
            <input type='text' className='form-control border border-dark' {...register('customerName', { required: false })} value="Abc" />
          </div>

          <div className='mb-4'>
            <label className='form-label'>Enter date of birth</label>
            <input type='text' className='form-control border border-dark' {...register('customerDateOfBirth', { required: false })} value="25-12-2000"/>
          </div>

          <div className='mb-4'>
            <label className='form-label'>Enter age</label>
            <input type='number' className='form-control border border-dark' {...register('customerAge', { required: false })} value="20"/>
          </div>

          <div className='mb-4'>
            <label className='form-label'>Enter required tenure</label>
            <input type='number' className='form-control border border-dark' {...register('requiredTenure', { required: false })} value="5"/>
          </div>

          <div className='mb-4'>
            <label className='form-label'>Enter customer gender</label>
            <input type='text' className='form-control border border-dark' {...register('customerGender', { required: false })} value="M"/>
          </div>

          <div className='mb-4'>
            <label className='form-label'>Enter customer email</label>
            <input type='text' className='form-control border border-dark' {...register('customerEmail', { required: false })} value="abc@gmail.com"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>Enter customer mobile no</label>
            <input type='text' className='form-control border border-dark' {...register('customerMobileNumber', { required: false })} value="2542369855"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>Enter customer additional mobile no</label>
            <input type='text' className='form-control border border-dark' {...register('customerAdditionalMobileNumber', { required: false })} value="9523654812"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>Enter customer amount paid for home</label>
            <input type='text' className='form-control border border-dark' {...register('customerAmountPaidForHome', { required: false })} value="50000"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>Enter loan required</label>
            <input type='text' className='form-control border border-dark' {...register('customerTotalLoanRequired', { required: false })} value="1500000"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>Enter customer loan status</label>
            <input type='text' className='form-control border border-dark' {...register('loanStatus', { required: false })} value="pending"/>
          </div>

          <div className='mb-4'>
            <h2>Permanat address</h2>
            <label className='form-label'>Area name</label>
            <input type='text' className='form-control border border-dark' {...register('customerAddress.permanentAddress.areaname', { required: false })}value="sb road"/>
          </div>

          <div className='mb-4'>
            <label className='form-label'>city name</label>
            <input type='text' className='form-control border border-dark' {...register('customerAddress.permanentAddress.cityname', { required: false })} value="pune" />
          </div>

          <div className='mb-4'>
            <label className='form-label'>enter district</label>
            <input type='text' className='form-control border border-dark' {...register('customerAddress.permanentAddress.district', { required: false })} value="pune"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>enter state</label>
            <input type='text' className='form-control border border-dark' {...register('customerAddress.permanentAddress.state', { required: false })} value="mh"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>enter pincode</label>
            <input type='text' className='form-control border border-dark' {...register('customerAddress.permanentAddress.pincode', { required: false })} value="488025"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>enter houseNumber</label>
            <input type='text' className='form-control border border-dark' {...register('customerAddress.permanentAddress.houseNumber', { required: false })} value="45"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>enter streetName</label>
            <input type='text' className='form-control border border-dark' {...register('customerAddress.permanentAddress.streetName', { required: false })} value="a road"/>
          </div>

          <div className='mb-4'>
            <h2>Local address</h2>
            <label className='form-label'>Area name</label>
            <input type='text' className='form-control border border-dark' {...register('customerAddress.localAddress.areaname', { required: false })} value="karve nagar"/>
          </div>

          <div className='mb-4'>
            <label className='form-label'>city name</label>
            <input type='text' className='form-control border border-dark' {...register('customerAddress.localAddress.cityname', { required: false })} value="pune"/>
          </div>

          <div className='mb-4'>
            <label className='form-label'>enter district</label>
            <input type='text' className='form-control border border-dark' {...register('customerAddress.localAddress.district', { required: false })} value="pune"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>enter state</label>
            <input type='text' className='form-control border border-dark' {...register('customerAddress.localAddress.state', { required: false })} value="mh"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>enter pincode</label>
            <input type='text' className='form-control border border-dark' {...register('customerAddress.localAddress.pincode', { required: false })} value="411036"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>enter houseNumber</label>
            <input type='text' className='form-control border border-dark' {...register('customerAddress.localAddress.houseNumber', { required: false })} value="11"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>enter streetName</label>
            <input type='text' className='form-control border border-dark' {...register('customerAddress.localAddress.streetName', { required: false })} value="xyz road"/>
          </div>

          <div className='mb-4'>
            <h2>Account details</h2>
            <label className='form-label'>enter accounType</label>
            <input type='text' className='form-control border border-dark' {...register('accountdetails.accounType', { required: false })} value="saving"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>enter accountBalance</label>
            <input type='text' className='form-control border border-dark' {...register('accountdetails.accountBalance', { required: false })}value="1000000" />
          </div>
          <div className='mb-4'>
            <label className='form-label'>enter accountHolderName</label>
            <input type='text' className='form-control border border-dark' {...register('accountdetails.accountHolderName', { required: false })} value="abc"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>enter accountStatus</label>
            <input type='text' className='form-control border border-dark' {...register('accountdetails.accountStatus', { required: false })} value="qwe"/>
          </div>
          <div className='mb-4'>
            <label className='form-label'>enter accountNumber</label>
            <input type='text' className='form-control border border-dark' {...register('accountdetails.accountNumber', { required: false })} value="1254785695"/>
          </div>

          <div className='mb-4'>
            <h2>Family dependent Info</h2>
            <label className='form-label'>Enetr no Of Family Member</label>
            <input type='number'   className='form-control border border-dark' {...register('familydependentInfo.noOfFamilyMember',{required:false})}value="4"></input>
          </div>

          <div className='mb-4'>
             <label className='form-label'>Enetr no Of Child</label>
            <input type='number'   className='form-control border border-dark' {...register('familydependentInfo.noOfChild',{required:false})}value="0"></input>
          </div>
   
          <div className='mb-4'>
            <label className='form-label'>Enetr marital Status</label>
            <input type='text'   className='form-control border border-dark' {...register('familydependentInfo.maritalStatus',{required:false})}value="unmarried"></input>
          </div>
          <div className='mb-4'>
             <label className='form-label'>Enetr dependant members</label>
             <input type='text'   className='form-control border border-dark' {...register('familydependentInfo.dependentMember',{required:false})}value="2"></input>
          </div>

          <div className='mb-4'>
            <label className='form-label'>Enetr familyIncome</label>
            <input type='text'   className='form-control border border-dark' {...register('familydependentInfo.familyIncome',{required:false})}value="500000"></input>
          </div>
      
              <div className='mb-4'>
              <h1>GuarantorDetails</h1> 
                <label className='form-label'>Enetr guarantor Name</label>
                <input type='text'   className='form-control border border-dark' {...register('gurantordetails.guarantorName',{required:false})}value="pqr"></input>
              </div>
    
              <div className='mb-4'>
                <label className='form-label'>Enetr guarantor Date Of Birth</label>
                <input type='text'   className='form-control border border-dark' {...register('gurantordetails.guarantorDateOfBirth',{required:false})}value="15-2-1996"></input>
              </div>
               
              <div className='mb-4'>
                <label className='form-label'>Enetr guarantor Relationship with Customer</label>
                <input type='text'   className='form-control border border-dark' {...register('gurantordetails.guarantorRelationshipwithCustomer',{required:false})}value="brother"></input>
              </div>
    
              <div className='mb-4'>
                <label className='form-label'>Enetr guarantor Mobile Number</label>
                <input type='number'   className='form-control border border-dark' {...register('gurantordetails.guarantorMobileNumber',{required:false})}value="9586235715"></input>
              </div>
              
              <div className='mb-4'>
                <label className='form-label'>Enetr guarantor AdharCardNo</label>
                <input type='number'   className='form-control border border-dark' {...register('gurantordetails.guarantorAdharCardNo',{required:false})}value="11111111111"></input>
              </div>
              
              <div className='mb-4'>
                <label className='form-label'>Enetr guarantor Mortgage Details</label>
                <input type='text'   className='form-control border border-dark' {...register('gurantordetails.guarantorMortgageDetails',{required:false})}value="documents"></input>
              </div>

              <div className='mb-4'>
                <label className='form-label'>Enetr guarantor Job Details</label>
                <input type='text'   className='form-control border border-dark' {...register('gurantordetails.guarantorJobDetails',{required:false})}value="IT employee"></input>
              </div>

              <div className='mb-4'>
                <label className='form-label'>guarantor LoaclAddress</label>
                <input type='text'   className='form-control border border-dark' {...register('gurantordetails.guarantorLoaclAddress',{required:false})}value="pune"></input>
              </div>

              <div className='mb-4'>
                <label className='form-label'>Enetr guarantor Permanent Address</label>
                <input type='text'   className='form-control border border-dark' {...register('gurantordetails.guarantorPermanentAddresss',{required:false})}value="pune"></input>
              </div>

          {/* <div className='mb-4'>
            <label className='form-label'>Upload Address proof Image</label>
            <input type='file' className='form-control border border-dark' 
            {...register('addressProof', { required: false })} />
          </div> */}
          <div className='mb-4'>
            <h2>all personal Document</h2>
            <label className='form-label'>Enetr address Proof</label>
           <input type='file'   className='form-control border border-dark' {...register('allpersonalDocument.addressProof',{required:false})}></input>
          </div>
    
          <div className='mb-4'>
             <label className='form-label'>Enetr panCard </label>
             <input type='file'   className='form-control border border-dark' {...register('allpersonalDocument.pancard',{required:false})}></input>
          </div>

          <div className='mb-4'>
             <label className='form-label'>Enetr incomeTax</label>
             <input type='file'   className='form-control border border-dark' {...register('allpersonalDocument.incomeTax',{required:false})}></input>
          </div> 

          < div className='mb-4'>
             <label className='form-label'>Enetr addhar Card</label>
             <input type='file'   className='form-control border border-dark' {...register('allpersonalDocument.addharCard',{required:false})}></input>
          </div>
    
          <div className='mb-4'>
             <label className='form-label'>Enetr photo</label>
             <input type='file'   className='form-control border border-dark' {...register('allpersonalDocument.photo',{required:false})}></input>
          </div>

      
          <div className='mb-4'>
             <label className='form-label'>Enetr signature</label>
             <input type='file'   className='form-control border border-dark' {...register('allpersonalDocument.signature',{required:false})}></input>
          </div>

          <div className='mb-4'>
             <label className='form-label'>Enetr bankCheque</label>
             <input type='file'   className='form-control border border-dark' {...register('allpersonalDocument.bankCheque',{required:false})}></input>
          </div>

          <div className='mb-4'>
             <label className='form-label'>Enetr salarySlips</label>
             <input type='file'   className='form-control border border-dark' {...register('allpersonalDocument.salarySlips',{required:false})}></input>
         </div>
         
          <div className='mb-2'>
            <button className='btn btn-outline-success w-25'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Customer;
