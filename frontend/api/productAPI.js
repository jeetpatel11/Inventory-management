import axios from "axios";

const APIBASEURL="http://localhost:5000/api/products";


export const getProducts = async ()=>{
    return await axios.get(APIBASEURL);
}


export const addProduct = async (product)=>{
    return await axios.post(`${APIBASEURL}/add`,product);
}

export const updateProduct = async (id,product)=>{
    
    return await axios.post(`${APIBASEURL}/${id}`,product);
}
export const deleteProduct = async (id)=>{
    
    return await axios.delete(`${APIBASEURL}/${id}`);
}

