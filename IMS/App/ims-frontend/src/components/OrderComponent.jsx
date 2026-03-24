import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { createOrder, updateOrder, getOrder } from '../Services/OrderService'
import { listCustomers } from '../Services/CustomerService'


 

const OrderComponent=()=>{

  // const [errors, setErrors] = useState({});
  // const [ORDER_ID, setorderid] = useState('')
  const [CUSTOMER_ID, setcustomerid] = useState('')
  // const [ORDER_DATE, setorderdate] = useState('')
  const [ORDER_STATUS, setorderstatus] = useState('')
  const [TOTAL_AMOUNT, settotalamount] = useState('')

  const[customers,setCustomers]= useState([])

  const handleSelectChange = (e) => { setSelectedCustomer(e.target.value); }
  const [selectedCustomer, setSelectedCustomer] = useState('');

  const{id}=useParams();

  //const handleorderid = (e) => setorderid(e.target.value)//we need this?????
  const handlecustomerid = (e) => setcustomerid(e.target.value)
  //const handleorderdate = (e) => setorderdate(e.target.value) //we need this??????????????????????????//
    const handleorderstatus = (e) => setorderstatus(e.target.value)
    const handletotalamount = (e) => settotalamount(e.target.value)

 const[errors, setErrors] = useState({
        CUSTOMER_ID:'',
        ORDER_STATUS:'',
        TOTAL_AMOUNT:''
    })

    const navigator=useNavigate();
  
  useEffect(()=> {
    listCustomers().then((response)=> {
        setCustomers(response.data);
    }).catch(error=>{
        console.error(error);
    })
    console.log(customers)
    }, []);

    
  useEffect(()=>{
  if(id){
        getOrder(id).then((response) =>{
        setcustomerid(response.data.CUSTOMER_ID);
        setorderstatus(response.data.ORDER_STATUS);
        settotalamount(response.data.TOTAL_AMOUNT); 
        setSelectedCustomer(response.data.CUSTOMER_ID);

        }).catch(error => {
            console.error(error);
            })
        }
  }, [id])


  function saveOrUpdateOrder(e)
  {

    e.preventDefault();
    const order={CUSTOMER_ID,ORDER_STATUS,TOTAL_AMOUNT}
    console.log(order)
   if(validateForm()) {
      if(id){
        updateOrder(id, order).then((response)=>{
          console.log(response.data);
          navigator('/order')                    
            }).catch(error=>{
              console.log(error)
              })
          }
          else{
            createOrder(order).then((response) => {
            console.log(response.data);
            navigator('/order')
          }).catch(error=>{
          console.log(error)
        })
      }
    }
  }

  function validateForm() {

        let valid=true;

        const errorsCopy={... errors}

        if(CUSTOMER_ID.trim) {
            errorsCopy.CUSTOMER_ID='';
        }
        else{
            errorsCopy.CUSTOMER_ID='Customer id is required';
            valid=false;
        }

        if(ORDER_STATUS.trim){
            errorsCopy.ORDER_STATUS='';
        }
        else{
            errorsCopy.ORDER_STATUS='order status is required';
            valid=false;
        }

        if(TOTAL_AMOUNT.trim){
            errorsCopy.TOTAL_AMOUNT='';
        }
        else{
            errorsCopy.TOTAL_AMOUNT='Total Amount is required';
            valid=false;
        }
         
        setErrors(errorsCopy);

        return valid;
      }

  function pageTitle(){
    if(id){
      return <h2 className='text-center'  >Update Order</h2>
    }
    else{
      return <h2 className='text-center'  >Add Order</h2>
    }

  }


   return (
    <div className='container'>
      <div className='row'>
        <div className='card'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form>

              {/* <div className='form-group mb-2'>
                <label className='form-label'>Customer Id</label>
                <input
                  type='text'
                  placeholder='Enter customer id '
                  className={`form-control ${errors.CUSTOMER_ID ? 'is-invalid' : ''}`}
                  value={CUSTOMER_ID}
                  onChange={handlecustomerid}
                />
              </div> */}

              <div className='form-group mb-2'>
                <label className='form-label'>Customer</label>
                <select value = {CUSTOMER_ID}  name="Customer" onChange={handlecustomerid} 
                 className={`form-control ${errors.CUSTOMER_ID ? 'is-invalid' : ''}`} placeholder='Select Customer' >
                <option value="">--Select Customer--</option>
                {
                  customers.map((customer) => (
                    <option key={customer.CUSTOMER_ID} value={customer.CUSTOMER_ID}>
                      {customer.NAME}
                    </option>
                    )
                  )}
                </select>
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Order Status</label>
                <input
                  type='text'
                  placeholder='Enter Order Status'
                  className={`form-control ${errors.ORDER_STATUS ? 'is-invalid' : ''}`}
                  value={ORDER_STATUS}
                  onChange={handleorderstatus}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Total Amount </label>
                <input
                  type='text'
                  placeholder='Enter total amount'
                  className={`form-control ${errors.TOTAL_AMOUNT ? 'is-invalid' : ''}`}
                  value={TOTAL_AMOUNT}
                  onChange={handletotalamount}
                />
              </div>

              <button className='btn btn-success' onClick={saveOrUpdateOrder}>Submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )

}
export default OrderComponent
 