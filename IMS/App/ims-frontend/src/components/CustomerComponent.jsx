import React,{useState, useEffect} from 'react'
import { createCustomer, getCustomer, updateCustomer } from '../Services/CustomerService'
import {useNavigate, useParams} from 'react-router-dom';

const CustomerComponent=()=>{
    const [NAME, setNAME]=useState('')
    const [PHONE_NO,setPHONE_NO]=useState('')
    const[EMAIL,setEMAIL]=useState('')
   
    const{id}=useParams();

    const[errors, setErrors] = useState({
        NAME:'',
        PHONE_NO:'',
        EMAIL:''
    })

    const handleName=(e) => setNAME(e.target.value);
    const handlePhonenum=(e) => setPHONE_NO(e.target.value);
    const handleEmail=(e)=>setEMAIL(e.target.value);

    

    const navigator=useNavigate();
    
    useEffect(()=>{
        if(id){
            getCustomer(id).then((response) =>{
                setNAME(response.data.NAME);
                setPHONE_NO(response.data.PHONE_NO);
                setEMAIL(response.data.EMAIL);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])
 
    function saveOrUpdateCustomer(e){
         e.preventDefault();

         if(validateForm()) {
             const Customer={NAME,PHONE_NO,EMAIL}
             console.log(Customer)
             if(id){
                updateCustomer(id, Customer).then((response)=>{
                console.log(response.data);
                navigator('/customer')                    
                }).catch(error=>{
                    console.log(error)
                })

             }else{
                createCustomer(Customer).then((response)=>{
                    console.log(response.data);
                    navigator('/customer')
                    }).catch(error=>{
                    console.log(error)
                    })
                }
            }
        }
    
    function validateForm() {

        let valid=true;

        const errorsCopy={... errors}
        if(NAME.trim) {
            errorsCopy.NAME='';
        }
        else{ errorsCopy.NAME='Name is Required';
            valid=false;
        }

        if(PHONE_NO.trim) {
            errorsCopy.PHONE_NO='';
        }
        else{
            errorsCopy.PHONE_NO='Phone No is required';
            valid=false;
        }

        if(EMAIL.trim){
            errorsCopy.EMAIL='';
        }
        else{
            errorsCopy.EMAIL='E-mail is required';
            valid=false;
        }

        setErrors(errorsCopy);

        return valid;
      }
      function pageTitle(){
        if(id){
            return <h2 className='text-center'> Update Customer</h2>
        }else{
            return <h2 className='text-center'>Add Customer</h2>
        }
      }

  return (
    <div className='row'>
        <div className='col-md-6'>
            <div className='card '>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input  type='text' placeholder='Enter name' name='NAME' value={NAME} className={`form-control ${errors.NAME ? 'is-invalid' : ''}`} onChange={handleName} >
                            </input>
                            {errors.NAME && <div className='invalid-feedback'>{errors.NAME}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Phoneno</label>
                            <input  type='text' placeholder='Enter phone num' name='PHONE_NO' value={PHONE_NO} className={`form-control ${errors.PHONE_NO ? 'is-invalid' : ''}`} onChange={handlePhonenum} >
                            </input>
                            {errors.PHONE_NO && <div className='invalid-feedback'>{errors.PHONE_NO}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input  type='text' placeholder='Enter Email' name='EMAIL' value={EMAIL} className={`form-control ${errors.EMAIL ? 'is-invalid' : ''}`} onChange={handleEmail}>
                            </input>
                            {errors.EMAIL && <div className='invalid-feedback'>{errors.EMAIL}</div>}
                          </div>
                        <button className='btn btn-success'onClick={saveOrUpdateCustomer}>Submit</button>
                    </form>
                </div>
            </div>
        </div> 
    </div>
  )

}
export default CustomerComponent