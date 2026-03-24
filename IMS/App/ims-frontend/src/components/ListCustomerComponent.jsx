import React, {useState, useEffect } from 'react'
import { listCustomers } from '../Services/CustomerService'
import  {useNavigate} from 'react-router-dom'
const ListCustomerComponent=()=>{

     const[customers,setCustomers]= useState([])
     const navigator=useNavigate();

   useEffect(()=> {
    listCustomers().then((response)=> {
        setCustomers(response.data);
    }).catch(error=>{
        console.error(error);
    })

   }, [])

   function addNewCustomer()
   {
        navigator('/add-Customer')
   }
   function UpdateCustomer(id){
          navigator(`/edit-customer/${id}`)
   }
  return (
    <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
            <h2 className='text-center'> Table Of Customers </h2>
            <button className='btn btn-primary mb-2'onClick={addNewCustomer}> Add Customer </button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                    <th> CUSTOMER ID</th>
                    <th> CUSTOMER NAME</th>
                    <th> CUSTOMER PHONENUM</th>
                    <th> CUSTOMER EMAIL</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map(customer=>
                            <tr key={customer.CUSTOMER_ID}>
                                <td>{customer.CUSTOMER_ID}</td>
                                 <td>{customer.NAME}</td>
                                 <td>{customer.PHONE_NO}</td>
                                 <td>{customer.EMAIL}</td>
                                 <td><button className='btn btn-info' onClick={()=>UpdateCustomer(customer.CUSTOMER_ID)}>Update</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default ListCustomerComponent