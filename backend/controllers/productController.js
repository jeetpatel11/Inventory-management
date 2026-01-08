const Product= require('../models/Product');

exports.addProduct= async (req,res)=>{
    try{
        const product=new Product(req.body);
        await product.save();
        res.status(201).json(product);
    }
    catch(error)
    {
        res.status(400).json({message:error.message})
    }
}

exports.getProduct=async (req,res)=>{
try
{
const products=await Product.find().sort({createdAt:-1});
res.json(products)
}
catch (e)
{
    res.status(500).json({message:e.message});
}
}


exports.updateProduct=async(req,res)=>{
    try{
        const product=await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true}
        );
        res.json(product);
    }
    catch(e)
    {
        
    res.status(500).json({message:e.message});
    }
}


exports.deleteProduct=async (req,res)=>{
    try
    {
        await Product.findByIdAndDelete(req.params.id);
        res.json({message:"Product deleted successfully"})
    }
    catch (e)
    {
        res.status(400).json({message:e.message})
    }
}