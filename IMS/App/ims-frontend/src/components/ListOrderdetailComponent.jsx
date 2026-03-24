import React,{ useEffect, useState } from 'react'
import { listOrderdetail } from '../Services/OrderDetailService'
import { useNavigate } from 'react-router-dom'


 const LListOrderdetailComponent = () => {

    const[orderdetails,setOrderdetail]=useState([])
    const navigator=useNavigate();
    useEffect(()=>{
      listOrderdetail().then((response)=>{
        setOrderdetail(response.data);      
    }).catch(error =>{
        console.error(error);

    })

    },[])
    function addNewOrderdetail(){
        navigator('/add-orderdetail')
    }
     function updateOrderdetail(id){
          navigator(`/edit-orderdetail/${id}`)
   }
  return (
    <div className='row'>
        <div className='col-md-3'></div>
    <div className='col-md-6'>

        <h2 className='text-center'>List Of OrderDetail</h2>
        <button className='btn btn-primary mb-2' onClick={addNewOrderdetail}>Add Order detail</button>
        <table>
            <thead>
                <tr>
                    <th>order id   </th>
                    <th>item id  </th>
                    <th>quantity  </th>
                    <th>priceatpurchase  </th>
                     <th>orderdetailid  </th>
                    
                </tr>
            </thead>
            <tbody>
                {
                         orderdetails.map(orderdetail =>
                        <tr key={orderdetail.ORDER_ID}>
                            <td>{ orderdetail.ORDER_ID}</td>
                            <td>{ orderdetail.ITEM_ID}</td>
                            <td>{ orderdetail.QUANTITY}</td>
                            <td>{ orderdetail.PRICE_AT_PURCHASE}</td>
                            <td>{ orderdetail.ORDER_DETAIL_ID}</td>

                            {/* <td>{ item.UNIT_INSTOCK}</td>
                            <td>{ item.STOCK}</td> */}
                            <td><button className='btn btn-info' onClick={()=>updateOrderdetail(orderdetail.ORDER_ID)}>Update</button></td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default LListOrderdetailComponent 
