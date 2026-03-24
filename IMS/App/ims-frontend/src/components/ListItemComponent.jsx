import React,{ useEffect, useState } from 'react'
import { listItem } from '../Services/ItemService'
import { useNavigate } from 'react-router-dom'


 const ListItemComponent = () => {

    const[items,setItem]=useState([])
    const navigator=useNavigate();
    useEffect(()=>{
      listItem().then((response)=>{
        setItem(response.data);      
    }).catch(error =>{
        console.error(error);

    })

    },[])
    function addNewItem(){
        navigator('/add-item')
    }
     function updateItem(id){
          navigator(`/edit-item/${id}`)
   }
  return (
    <div className='row'>
        <div className='col-md-3'></div>
    <div className='col-md-6'>

        <h2 className='text-center'>List Of Items</h2>
        <button className='btn btn-primary mb-2' onClick={addNewItem}>Add Item</button>
        <table>
            <thead>
                <tr>
                    <th>item id   </th>
                    <th>categoryid  </th>
                    <th>itemname  </th>
                    <th>unitprice  </th>
                    {/* <th>unit_instock  </th>
                    <th>stock  </th> */}
                </tr>
            </thead>
            <tbody>
                {
                         items.map(item =>
                        <tr key={item.Item_ID}>
                            <td>{ item.Item_ID}</td>
                            <td>{ item.ITEM_CATEGORY_ID}</td>
                            <td>{ item.ITEM_NAME}</td>
                            <td>{ item.UNITPRICE}</td>
                            {/* <td>{ item.UNIT_INSTOCK}</td>
                            <td>{ item.STOCK}</td> */}
                            <td><button className='btn btn-info' onClick={()=>updateItem(item.Item_ID)}>Update</button></td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default ListItemComponent 
