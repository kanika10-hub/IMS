import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { createOrderdetail, updateOrderdetail, getOrderdetail } from '../Services/OrderDetailService'

const OrderdetailComponent=()=>{

  // const [errors, setErrors] = useState({});
  // const [ORDER_ID, setorderid] = useState('')
  const [ORDER_ID, setorderid] = useState('')
  // const [ORDER_DATE, setorderdate] = useState('')
  const [ITEM_ID, setitemid] = useState('')
  const [QUANTITY, setquantity] = useState('')
  const [PRICE_AT_PURCHASE, setpriceatpurchase] = useState('')
  const [ORDER_DETAIL_ID, setorderdetailid] = useState('')


  const{id}=useParams();

  //const handleorderid = (e) => setorderid(e.target.value)//we need this?????
  const handleitemid = (e) => setitemid(e.target.value)
  //const handleorderdate = (e) => setorderdate(e.target.value) //we need this??????????????????????????//
    const handlequantity = (e) => setquantity(e.target.value)
    const handlepriceatpurchase = (e) => setpriceatpurchase(e.target.value)
        const handleorderdetailid = (e) => setorderdetailid(e.target.value)


 const[errors, setErrors] = useState({
        ITEM_ID:'',
        QUANTITY:'',
        PRICE_AT_PURCHASE:'',
        ORDER_DETAIL_ID:''
    })

    const navigator=useNavigate();
  
  useEffect(()=>{
  if(id){
        getOrderdetail(id).then((response) =>{
        setitemid(response.data.ITEM_ID);
        setquantity(response.data.QUANTITY);
        setpriceatpurchase(response.data.PRICE_AT_PURCHASE); 
        setorderdetailid(response.data.ORDER_DETAIL_ID); 

        }).catch(error => {
            console.error(error);
            })
        }
  }, [id])


  function saveOrUpdateOrderDetail(e)
  {

    e.preventDefault();
    const orderdetail={ITEM_ID,QUANTITY,PRICE_AT_PURCHASE,ORDER_DETAIL_ID}
    console.log(order)
   if(validateForm()) {
      if(id){
        updateOrder(id, orderdetail).then((response)=>{
          console.log(response.data);
          navigator('/orderdetail')                    
            }).catch(error=>{
              console.log(error)
              })
          }
          else{
            createOrder(orderdetail).then((response) => {
            console.log(response.data);
            navigator('/orderdetail')
          }).catch(error=>{
          console.log(error)
        })
      }
    }
  }

  function validateForm() {

        let valid=true;

        const errorsCopy={... errors}

        if(ITEM_ID.trim) {
            errorsCopy.ITEM_ID='';
        }
        else{
            errorsCopy.ITEM_ID='Category id is required';
            valid=false;
        }

        if(QUANTITY.trim){
            errorsCopy.QUANTITY='';
        }
        else{
            errorsCopy.QUANTITY='order status is required';
            valid=false;
        }

        if(PRICE_AT_PURCHASE.trim){
            errorsCopy.PRICE_AT_PURCHASE='';
        }
        else{
            errorsCopy.PRICE_AT_PURCHASE='Active is required';
            valid=false;
        }

        if(ORDER_DETAIL_ID.trim){
            errorsCopy.ORDER_DETAIL_ID='';
        }
        else{
            errorsCopy.ORDER_DETAIL_ID='Active is required';
            valid=false;
        }
         
        setErrors(errorsCopy);

        return valid;
      }

  function pageTitle(){
    if(id){
      return <h2 className='text-center'  >Update Order Detail</h2>
    }
    else{
      return <h2 className='text-center'  >Add Order Detail</h2>
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

              <div className='form-group mb-2'>
                <label className='form-label'>item Id</label>
                <input
                  type='text'
                  placeholder='Enter item id '
                  className={`form-control ${errors.ITEM_ID ? 'is-invalid' : ''}`}
                  value={ITEM_ID}
                  onChange={handleitemid}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>quantity</label>
                <input
                  type='text'
                  placeholder='Enter Order Status'
                  className={`form-control ${errors.QUANTITY ? 'is-invalid' : ''}`}
                  value={QUANTITY}
                  onChange={handlequantity}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>price at purchase </label>
                <input
                  type='text'
                  placeholder='Enter price at purchase '
                  className={`form-control ${errors.PRICE_AT_PURCHASE ? 'is-invalid' : ''}`}
                  value={PRICE_AT_PURCHASE}
                  onChange={handlepriceatpurchase}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>order detail id  </label>
                <input
                  type='text'
                  placeholder='Enter order detail id '
                  className={`form-control ${errors.ORDER_DETAIL_ID ? 'is-invalid' : ''}`}
                  value={ORDER_DETAIL_ID}
                  onChange={handlepriceatpurchase}
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
 