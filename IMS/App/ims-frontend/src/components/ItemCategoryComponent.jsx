import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import { createItemCategory, updateItemCategory, getItemCategory } from '../Services/ItemCategoryService';





const ItemCategoryComponent = () => {
  const [errors, setErrors] = useState({});
  const [ITEM_CATEGORY_ID, setcategorid] = useState('')
  const [ITEM_CATEGORY_NAME, setcategoryname] = useState('')
  const [ITEM_CATEGORY_DESCRIP, setcategorydescript] = useState('')
  const [ACTIVE, setifactive] = useState('')
  const [DATE_CREATED, setdate] = useState('')

  const{id}=useParams();

  //const handlecategoryID = (e) => setcategorid(e.target.value)
  const handlecategory_name = (e) => setcategoryname(e.target.value)
  const handlecategorydescription = (e) => setcategorydescript(e.target.value)
  const handleactive = (e) => setifactive(e.target.value)
  //const handledate = (e) => setdate(e.target.value)

    const navigator=useNavigate();
  
  useEffect(()=>{
  if(id){
        getItemCategory(id).then((response) =>{
        setcategoryname(response.data.ITEM_CATEGORY_NAME);
        setcategorydescript(response.data.ITEM_CATEGORY_DESCRIP);
        setifactive(response.data.ACTIVE); 
        }).catch(error => {
            console.error(error);
            })
        }
  }, [id])


  function saveOrUpdateItemCategory(e)
  {

    e.preventDefault();
    const category={ITEM_CATEGORY_NAME,ITEM_CATEGORY_DESCRIP,ACTIVE}
    console.log(category)
   if(validateForm()) {
      if(id){
        updateItemCategory(id, category).then((response)=>{
          console.log(response.data);
          navigator('/itemCategory')                    
            }).catch(error=>{
              console.log(error)
              })
          }
          else{
            createItemCategory(category).then((response) => {
            console.log(response.data);
            navigator('/itemCategory')
          }).catch(error=>{
          console.log(error)
        })
      }
    }
  }

  function validateForm() {

        let valid=true;

        const errorsCopy={... errors}

        if(ITEM_CATEGORY_NAME.trim) {
            errorsCopy.ITEM_CATEGORY_NAME='';
        }
        else{
            errorsCopy.ITEM_CATEGORY_NAME='Category name is required';
            valid=false;
        }

        if(ITEM_CATEGORY_DESCRIP.trim){
            errorsCopy.ITEM_CATEGORY_DESCRIP='';
        }
        else{
            errorsCopy.ITEM_CATEGORY_DESCRIP='Item Category Desc is required';
            valid=false;
        }

        if(ACTIVE.trim){
            errorsCopy.ACTIVE='';
        }
        else{
            errorsCopy.ACTIVE='Active is required';
            valid=false;
        }
         
        setErrors(errorsCopy);

        return valid;
      }

  function pageTitle(){
    if(id){
      return <h2 className='text-center'  >Update category</h2>
    }
    else{
      return <h2 className='text-center'  >Add category</h2>
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
                <label className='form-label'>Item category Name</label>
                <input
                  type='text'
                  placeholder='Enter Item Category name'
                  className={`form-control ${errors.ITEM_CATEGORY_NAME ? 'is-invalid' : ''}`}
                  value={ITEM_CATEGORY_NAME}
                  onChange={handlecategory_name}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Item category description</label>
                <input
                  type='text'
                  placeholder='Enter Item Desc'
                  className={`form-control ${errors.ITEM_CATEGORY_DESCRIP ? 'is-invalid' : ''}`}
                  value={ITEM_CATEGORY_DESCRIP}
                  onChange={handlecategorydescription}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Active </label>
                <input
                  type='text'
                  placeholder='Enter Active'
                  className={`form-control ${errors.ACTIVE ? 'is-invalid' : ''}`}
                  value={ACTIVE}
                  onChange={handleactive}
                />
              </div>

              <button className='btn btn-success' onClick={saveOrUpdateItemCategory}>Submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )

}
export default ItemCategoryComponent
 