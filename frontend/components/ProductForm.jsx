import react from 'react'
import { useState } from 'react';

const ProductForm =({onSubmit,productToEdit,onCancel})=>{

    const [product,setProduct]=useState({
        name:"",
        category:"",
        quantity:"",
        price:"",
    })


    const handleChange=(e)=>{
        const {name,value}=e.target;
        setProduct((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit({
            ...product,
            quantity:Number(product.quantity),
            price:Number(product.price)
        });
        setProduct({name:"",category:"",quantity:"",price:""});
    }

    return(
        <>
            <form onSubmit={handleSubmit} style={{marginBottom:"20px"}}>
                <input
                  type='text'
                  placeholder='Product Name..'
                  name='name'
                  value={product.name}
                  onChange={handleChange}
                  required
                  style={{margin:"5px"}}
                />
                <input
                  type='text'
                  placeholder='Category..'
                  name='category'
                  value={product.category}
                  onChange={handleChange}
                  required
                  style={{margin:"5px"}}
                />
                <input
                  type='number'
                  placeholder='Quantity..'
                  name='quantity'
                  value={product.quantity}
                  onChange={handleChange}
                  required
                  style={{margin:"5px"}}
                />
                <input
                  type='number'
                  placeholder='Price..'
                  name='price'
                  value={product.price}
                  onChange={handleChange}
                  required
                  style={{margin:"5px"}}
                />

                <button type='submit'>
                    {productToEdit?"Update":"Add"}
                </button>
                {productToEdit && <button onClick={onCancel}>Cancel</button>}
            </form>
        </>
    )
}

export default ProductForm;