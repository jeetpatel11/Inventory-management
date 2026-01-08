import react from 'react'

const ProductList =({products,onEdit,onDelete})=>{
    return(
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(products)}
                    {products.length==0?(<>
                    <tr>
                        <td colSpan={6} style={{textAlign:"center"}}>
                            NO PRODUCTS FOUND
                        </td>
                    </tr>
                    </>):(
                    products.map((product)=>{
                        return(
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td style={{backgroundColor:"lightblue"}}>{product.status}</td>
                            <td>
                                <button onClick={()=>onEdit(product)} style={{backgroundColor:"orange",margin:'5px'}}>Edit</button>
                                <button onClick={()=>onDelete(product._id)} style={{backgroundColor:"red",margin:'5px'}}>Delte</button>
                            </td>
                        </tr>
                        )
                    })
                )}
                </tbody>
            </table>
        </>
    )
}

export default ProductList;