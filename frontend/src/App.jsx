import './App.css'
import ProductList from "../components/ProductList";
import { getProducts } from '../api/productAPI';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {

  const [products,setProducts]=useState([]);
  
  const fetchProducts = async ()=>{
    try
    {
      const res=await getProducts();
      
      setProducts(res.data)
    }
    catch (e)
    {
      console.log("ERORR::",e)
    }
  }

  useEffect(()=>{
    fetchProducts();
  },[])
  


  return (
    <>
      <div>
        <ProductList
        products={products}
        />
      </div>
    </>
  )
}

export default App
