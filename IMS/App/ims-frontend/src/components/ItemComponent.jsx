import React, { useEffect, useState } from 'react'
import { createItem, getItem, updateItem } from '../Services/ItemService'
import {listItemCategories} from '../Services/ItemCategoryService'

import {useNavigate, useParams} from 'react-router-dom';

const ItemComponent = () => {

  const [ITEM_CATEGORY_ID, setcategoryID] = useState('')
  const [ITEM_NAME, setitem_name] = useState('')
  const [UNITPRICE, setprice] = useState('')
  // const [UNIT_INSTOCK, setunit_instock] = useState('')
  // const [STOCK, setstock] = useState('')

  const [categories, setCategories] = useState([])
 
  const handleSelectChange = (e) => { setSelectedCategory(e.target.value); }
  const [selectedCategory, setSelectedCategory] = useState('');


  const{id}=useParams();
  

   const[errors, setErrors] = useState({
          ITEM_CATEGORY_ID:'',
          ITEM_NAME:'',
          UNITPRICE:''
          // UNIT_INSTOCK:'',
          // STOCK:''
      })
  

  const handlecategoryID = (e) => setcategoryID(e.target.value)
  const handleitem_name = (e) => setitem_name(e.target.value)
  const handleprice = (e) => setprice(e.target.value)
  // const handleunitinstock = (e) => setunit_instock(e.target.value)
  // const handlestock = (e) => setstock(e.target.value)
  

  const navigator=useNavigate();


    // useEffect(()=>{
    //       const loadCategories = async() =>  {
    //         try{
    //           const resoponseData = await getItemCategory();
    //           setCategories(resoponseData.data)
    //           console.log(resoponseData.data)
    //         }
    //         catch(error) {
    //           console.error(error);
    //           }
    //       };
    //       loadCategories();
    //     }, [])

      useEffect(()=> {
        listItemCategories().then((response)=> {
            setCategories(response.data);

        }).catch(error=>{
            console.error(error);
        })

        console.log(categories)
    
        }, []);

  useEffect(()=>{
  if(id){
        getItem(id).then((response) =>{
        setcategoryID(response.data.ITEM_CATEGORY_ID);
        setitem_name(response.data.ITEM_NAME);
        setprice(response.data.UNITPRICE);
        // setunit_instock(response.data.UNIT_INSTOCK);
        // setstock(response.data.STOCK);
        setSelectedCategory(response.data.ITEM_CATEGORY_ID)
        }).catch(error => {
            console.error(error);
            })
        }
  }, [id]);
  




  function saveOrUpdateItem(e) {
    e.preventDefault();

    if(validateForm()) {
     const Item={ITEM_CATEGORY_ID,ITEM_NAME,UNITPRICE}
     console.log(Item)
      if(id){
        updateItem(id, Item).then((response)=>{

          console.log(response.data);
          navigator('/item')                    
          }).catch(error=>{
      console.log(error)
      })
      }else{
         createItem(Item).then((response)=>{
          console.log(response.data);
          navigator('/item')
         }).catch(error=>{
         console.log(error)
      })
    }
  }
};

 function validateForm() {

        let valid=true;

        const errorsCopy={... errors}
        if(ITEM_CATEGORY_ID.trim) {
            errorsCopy.ITEM_CATEGORY_ID='';
        }
        else{ errorsCopy.ITEM_CATEGORY_ID='Item Category is Required';
            valid=false;
        }

        if(ITEM_NAME.trim) {
            errorsCopy.ITEM_NAME='';
        }
        else{
            errorsCopy.ITEM_NAME='name is required';
            valid=false;
        }

        if(UNITPRICE.trim){
            errorsCopy.UNITPRICE='';
        }
        else{
            errorsCopy.UNITPRICE='unit price is required';
            valid=false;
        }

        setErrors(errorsCopy);

        return valid;
      };

  
  return (
    <div className='container'>
      <div className='row'>
        <div className='card'>
          <div className='card-body'>
            <form>

              <div className='form-group mb-2'>
                <label className='form-label'>Category ID</label>
                <input
                  type='text'
                  placeholder='Enter Category name'
                  name="ItemCategory"
                  className={`form-control ${errors.ITEM_CATEGORY_ID ? 'is-invalid' : ''}`}
                  value={ITEM_CATEGORY_ID}
                  onChange={handlecategoryID}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Category</label>
                <select value = {selectedCategory}  name="ItemCategory" onChange={handleSelectChange} placeholder='Select Category' >
                <option value="">--Select Category--</option>
                {
                  categories.map((category) => (
                    <option key={category.ITEM_CATEGORY_ID} value={category.ITEM_CATEGORY_ID}>
                      {category.ITEM_CATEGORY_NAME}
                    </option>
                    )
                  )}
                </select>
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Item Name</label>
                <input
                  type='text'
                  placeholder='Enter Item name'
                  className={`form-control ${errors.ITEM_NAME ? 'is-invalid' : ''}`}
                  value={ITEM_NAME}
                  onChange={handleitem_name}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Unit Price</label>
                <input
                  type='text'
                  placeholder='Enter Unite Price'
                  className={`form-control ${errors.UNITPRICE ? 'is-invalid' : ''}`}
                  value={UNITPRICE}
                  onChange={handleprice}
                />
              </div>

              {/* <div className='form-group mb-2'>
                <label className='form-label'>Unit In Stock</label>
                <input
                  type='text'
                  placeholder='Enter Units in stock'
                  className={`form-control ${errors.UNIT_INSTOCK ? 'is-invalid' : ''}`}
                  value={UNIT_INSTOCK}
                  onChange={handleunitinstock}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Stock</label>
                <input
                  type='text'
                  className={`form-control ${errors.STOCK ? 'is-invalid' : ''}`}
                  value={STOCK}
                  onChange={handlestock}
                />
              </div> */}

              <button className='btn btn-success' onClick={saveOrUpdateItem}>Submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemComponent
