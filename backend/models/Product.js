
const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
        min:0
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    status:{
        type:String,
        enum:['in stock','out of stock'],
        default:'in stock'
    },
    
    
},

{timestamps:true}
);

module.exports=mongoose.model('Product',productSchema);