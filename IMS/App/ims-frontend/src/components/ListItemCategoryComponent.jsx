import React , {useEffect, useState} from 'react'
import { listItemCategories } from '../Services/ItemCategoryService'
import  {useNavigate} from 'react-router-dom'

function ListItemCategoryComponent() {
        const[itemCategories,setItemCategory]=useState([])
         const navigator=useNavigate();
    
    useEffect(()=>{
      listItemCategories().then((response)=>{
        setItemCategory(response.data);      
    }).catch(error =>{
        console.error(error);

    })

    },[])
    
    function addNewCategory()
   {
        navigator('/add-Category')
   }
   function updateCategory(id){
    navigator(`/edit-itemCategory/${id}`)
   }

 
  return (
    <div>
      
        <h2 className='text-center'>List Of Items Category</h2>
        <button className='btn btn-primary mb-2'onClick={addNewCategory}> Add Category </button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Item Category Id   </th>
                    <th>Category Name  </th>
                    <th>Category Desc  </th>
                    <th>Active  </th>
                    <th>Date Created  </th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                         itemCategories.map(itemCategory =>
                        <tr key={itemCategory.ITEM_CATEGORY_ID}>
                            <td>{ itemCategory.ITEM_CATEGORY_ID}</td>
                            <td>{ itemCategory.ITEM_CATEGORY_NAME}</td>
                            <td>{ itemCategory.ITEM_CATEGORY_DESCRIP}</td>
                            <td>{ itemCategory.ACTIVE}</td>
                            <td>{ itemCategory.DATE_CREATED }</td>
                            <td><button className='btn btn-info' onClick={()=>updateCategory(itemCategory.ITEM_CATEGORY_ID)}>Update</button></td>
                           
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListItemCategoryComponent