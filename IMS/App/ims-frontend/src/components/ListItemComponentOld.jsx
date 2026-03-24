import React, {useState} from 'react'
import { listItem } from '../Services/CustomerService'

const ListItemComponentOld=()=>{

     const[items,setItems]= useState([])

   useEffect(()=> {
    listItem().then((response)=> {
        setItems(response.data);
    }).catch(error=>{
        console.error(error);

    })

   }, [])

  return (
    <div className='container'>
        <h2 className='text-center'> table of customers </h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                    <th> CUSTOMER ID</th>
                    <th> CUSTOMER NAME</th>
                    <th> CUSTOMER PHONENUM</th>
                    <th> CUSTOMER EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item=>
                            <tr key={item.CUSTOMER_ID}>
                                <td>{item.CUSTOMER_ID}</td>
                                 <td>{item.NAME}</td>
                                 <td>{item.PHONE_NO}</td>
                                 <td>{item.EMAIL}</td>
                            </tr>)
                    }
                </tbody>
            </table>
            
        
    </div>
  )
}

export default ListItemComponentOld