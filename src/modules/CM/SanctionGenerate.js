import axios from "axios";
import React, { useState,useEffect } from "react";

import { Link } from "react-router-dom";

function SanctionGenerate()
{
    const [customer,setCustomer]=useState([]);
    
    const getData=()=>{
        axios.get('http://localhost:9095/customer/getByCustomerLoanstatus/docverify')
        .then((res)=>setCustomer(res.data))
        
    }
    useEffect(getData,[])
    console.log(customer);
    return(          
           <div>
            <h3>Varification Pending</h3>
           <table className="table table-hover">
            <thead>
                <tr>
                    <th>Customer Id</th>
                    <th>CustomerName</th>  
                    <th>customerDateOfBirth</th>                  
                    <th>customerAge</th>
                    <th>required Tenure</th>                                     
                    <th>customer Gender</th>  
                    <th>customer Email</th>
                    <th>Customer MobileNumber</th>
                    <th>customer Email</th>
                    <th>customerAmountPaidForHome</th>
                    <th>loanStatus</th>                
                                    
                </tr>
            </thead>
            <tbody>
                {
                    customer.map((customer, index)=><tr key={index}>
                        <td>{customer.customerID}</td>
                        <td>{customer.customerName}</td>                        
                        <td>{customer.customerDateOfBirth}</td>       
                        <td>{customer.customerAge}</td>
                        <td>{customer.requiredTenure}</td>
                        <td>{customer.customerGender}</td> 
                        <td>{customer.customerEmail}</td> 
                        <td>{customer.customerMobileNumber}</td> 
                        <td>{customer.customerAmountPaidForHome}</td> 
                        <td>{customer.customerTotalLoanRequired}</td> 
                        <td>{customer.loanStatus}</td> 
                        <td>
                        <Link className="btn btn-outline-primary me-4" to={`/dashboard/sanctionform/${customer.customerID}`}>Sanction Generate</Link>
                            </td>                                                    
                    </tr>)
                }
                </tbody> 
           </table>
        </div>
  
    )
}
export default SanctionGenerate;