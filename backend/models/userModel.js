const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    contact:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    role:{
        type:Number,
        required:true,
        default:0,
    }

},{timestamps:true})

const userModel= mongoose.model('user',userSchema);
module.exports=userModel;