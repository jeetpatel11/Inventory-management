import react from 'react'

const ProductList =({products})=>{
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
                            <td>{product.status}</td>
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