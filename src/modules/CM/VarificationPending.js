import axios from "axios";
import React, { useState,useEffect } from "react";
function VarificationPending()
{
    const [customer,setCustomer]=useState([]);

    const getData=()=>{
        axios.get('http://localhost:9095/customer/getByCustomerLoanstatus/pending')
        .then((res)=>setCustomer(res.data))
    }
    useEffect(getData,[])
    
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
                    customer.map((customer)=><tr>
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
                                                                             
                    </tr>)
                }
                </tbody> 
           </table>
        </div>
  
    )
}
export default VarificationPending;