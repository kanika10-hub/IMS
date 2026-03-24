import axios from "axios";
const REST_API_BASE_URL='http://localhost:8080/customer';
export const listCustomers=()=> axios.get(REST_API_BASE_URL);

export const createCustomer=(customer)=>axios.post(REST_API_BASE_URL, customer);
export const getCustomer=(id)=>axios.get(REST_API_BASE_URL+'/'+ id);
export const updateCustomer=(id, customer)=>axios.put(REST_API_BASE_URL+'/'+ id, customer)
