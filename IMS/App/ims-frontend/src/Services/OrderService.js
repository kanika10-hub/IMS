import axios from "axios";
const REST_API_BASE_URL='http://localhost:8080/order';
export const listOrders = () => axios.get(REST_API_BASE_URL);
export const createOrder= (order)=>axios.post(REST_API_BASE_URL, order);
export const getOrder=(id)=>axios.get(REST_API_BASE_URL+'/'+ id);
export const updateOrder=(id, order)=>axios.put(REST_API_BASE_URL+'/'+ id, order)