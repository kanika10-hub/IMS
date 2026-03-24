import axios from "axios";
const REST_API_BASE_URL='http://localhost:8080/itemCategory';
export const listItemCategories =() => axios.get(REST_API_BASE_URL);
export const createItemCategory=(itemCategory)=>axios.post(REST_API_BASE_URL, itemCategory);
export const getItemCategory=(id)=>axios.get(REST_API_BASE_URL+'/'+ id);
export const updateItemCategory=(id, itemCategory)=>axios.put(REST_API_BASE_URL+'/'+ id, itemCategory)