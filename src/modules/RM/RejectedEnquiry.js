import axios from 'axios';
import React, { useEffect, useState } from 'react'

function RejectedEnquiry() {

  const [Enquiry,setEnquiry]=useState([]);

  const getDataByStatus=()=>{
     axios.get('http://localhost:9091/enquiry/getByCibilStatus/Bad')
     
      .then((res)=>setEnquiry(res.data))
   }
   useEffect(getDataByStatus,[])
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
     <td>CibilID</td>
     <td>CibilScore</td>
     <td>CibilStatus</td>
     <td>CibilscoreDateandTime</td>
     <td>remark</td>
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
         <td>{Enquiry.cibilScore.cibilId}</td>
         <td>{Enquiry.cibilScore.cibilScore}</td>
         <td>{Enquiry.cibilScore.status}</td>
         <td>{Enquiry.cibilScore.cibilScoreDateandTime}</td>
         <td>{Enquiry.cibilScore.remark}</td>      
       </tr>)
     }
   </tbody> 
 </table>
</div>
  )
}

export default RejectedEnquiry;