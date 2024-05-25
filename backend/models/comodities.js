const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    photo:{
        data:Buffer,
        contentType:String,
    },
    category:{
        type:mongoose.ObjectId,
        ref:"category",
        required:true,
    }

})

const productModel=mongoose.model('product', productSchema);

module.exports=productModel;
