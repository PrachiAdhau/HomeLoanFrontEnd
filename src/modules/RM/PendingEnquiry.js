import axios from 'axios';
import React, { useEffect, useState } from 'react'

function PendingEnquiry() {
  const [Enquiry,setEnquiry]=useState([]);
  

  const getDataByStatus=()=>{
     axios.get('http://localhost:9091/enquiry/getenqCibilNullvalue/without-cibil')
     
      .then((res)=>setEnquiry(res.data))
   }
   useEffect(getDataByStatus,[])

   function generateCibil(applicant_Id)
   {
       axios.put(`http://localhost:9091/enquiry/getCibilbyeid/${applicant_Id}`)
       .then(res=>{
       alert("Cibil score is generated..!");
       })
   .catch(error=>console.log(error))
   }
  return (
    <div>
    <table className='table table-hover'>
   <thead>
     <tr>
     <th>ApplicantID</th>
     <th>first_Name</th>
     <th>Last_Name</th>
     <th>Age</th>
     <td>email</td>
     <td>mobileno</td>
     <td>alternatemobileno</td>
     <td>pancardNo</td>
     <td>adharNo</td>
     <td>address</td>
     <td>city</td>
     <td>Check Cibil</td>
    
     </tr>
   </thead>
    <tbody>
     {
       Enquiry.map((Enquiry,index)=><tr key={index}> 
         <td>{Enquiry.applicant_Id}</td>
         <td>{Enquiry.first_Name}</td>
         <td>{Enquiry.last_Name}</td>
         <td>{Enquiry.age}</td>
         <td>{Enquiry.email}</td>
         <td>{Enquiry.mobileNo}</td>
         <td>{Enquiry.alternateMobileNo}</td>
         <td>{Enquiry.pancardNo}</td>
         <td>{Enquiry.adharNo}</td>
         <td>{Enquiry.address}</td>
         <td>{Enquiry.city}</td>
         <td><button className='btn btn-outline-danger' onClick={()=>generateCibil(Enquiry.applicant_Id)}>
                  CheckCibil
                  </button>
                  </td>

       </tr>)
     }
   </tbody> 
 </table>
</div>
  )
}

export default PendingEnquiry;