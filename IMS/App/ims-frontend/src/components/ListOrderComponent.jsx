import React , {useEffect, useState} from 'react'
import { listOrders } from '../Services/OrderService.js'
import  {useNavigate} from 'react-router-dom'

function ListOrderComponent() {
        const[orders,setorder]=useState([])
         const navigator=useNavigate();
    
    useEffect(()=>{
      listOrders().then((response)=>{
        setorder(response.data);      
    }).catch(error =>{
        console.error(error);
    })

    },[])
    
    function addOrder()
   {
        navigator('/add-Order')
   }

   function updateOrder(id){
    navigator(`/edit-Order/${id}`)

   }

 
  return (
    <div>
      
        <h2 className='text-center'>List Of Orders</h2>
        <button className='btn btn-primary mb-2'onClick={addOrder}> Add Order </button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Order Id   </th>
                    <th>Customer Id </th>
                    <th>Order Date  </th>
                    <th>Order Status  </th>
                    <th>Total Amount  </th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                         orders.map(order =>
                        <tr key={order.ORDER_ID}>
                            <td>{ order.ORDER_ID}</td>
                            <td>{ order.CUSTOMER_ID}</td>
                            <td>{ order.ORDER_DATE}</td>
                            <td>{ order.ORDER_STATUS}</td>
                            <td>{ order.TOTAL_AMOUNT }</td>
                            <td><button className='btn btn-info' onClick={()=>updateOrder(order.ORDER_ID)}>Update</button></td>
                           
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListOrderComponent