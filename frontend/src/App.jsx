import './App.css'
import ProductList from "../components/ProductList";
import { addProduct, deleteProduct, getProducts, updateProduct } from '../api/productAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductForm from '../components/ProductForm';


function App() {

  const [products,setProducts]=useState([]);
  const [editingProduct,seteditingProduct]=useState();

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

  const handleAdd = async (product)=>{
    if(editingProduct)
    {
      await updateProduct(editingProduct._id)
      seteditingProduct(null);
    }
    else
    {
      await addProduct(product)
    }
    fetchProducts();
  }

  const handleEdit=(product)=>{
    seteditingProduct(product);
  }
  
  const handleCancelEdit = ()=>{
    seteditingProduct(null);
  }

  const handleDelete =async(id)=>{
    if(window.confirm("Are you sure you want to delte thi product."))
    {
      await deleteProduct(id);
      fetchProducts();
    }
  }

  useEffect(()=>{
    fetchProducts();
  },[])
  


  return (
    <>
      <div>
        <ProductForm
        onCancel={handleCancelEdit}
        productToEdit={editingProduct}
        onSubmit={handleAdd}
        />
        <ProductList
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
        />
      </div>
    </>
  )
}

export default App
