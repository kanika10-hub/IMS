import axios from "axios";
const REST_API_BASE_URL='http://localhost:8080/orderdetail';
export const listOrderDetails = () => axios.get(REST_API_BASE_URL);
export const createOrderDetails= (order)=>axios.post(REST_API_BASE_URL, order);
export const getOrderDetails=(id)=>axios.get(REST_API_BASE_URL+'/'+ id);
export const updateOrderDetails=(id, order)=>axios.put(REST_API_BASE_URL+'/'+ id, order)