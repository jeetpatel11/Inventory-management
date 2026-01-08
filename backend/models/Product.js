
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
        enum:["in stock","out of stock"],
        default:'in stock'
    },


    
},


{timestamps:true}
);


productSchema.pre("save", function () {
    this.status = this.quantity > 0 ? "in stock" : "out of stock";
});

productSchema.pre("findOneAndUpdate", function () {
    const update = this.getUpdate();
    if (update.quantity !== undefined) {
        update.status = update.quantity > 0 ? "In stock" : "Out of stock";
    }
});


module.exports=mongoose.model('Product',productSchema);