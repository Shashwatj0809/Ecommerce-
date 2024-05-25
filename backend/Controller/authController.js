const { hashPassword, comparePassword } = require('../helper/authhelper');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const userModel=require('../models/userModel');


async function userRegistration(req,res){
    console.log(req.body);
    const name=req.body.name;   
    const email=req.body.email;
    const contact=req.body.contact;
    const password=req.body.password;
    const address=req.body.address;
    const role=req.body.role;
    console.log(role);

    const userEmail=await userModel.findOne({email});
    if(userEmail){
        return res.status(200).send({
            success:true,
            message:'Already registered'
        })
    }
    const hashedPassword=await hashPassword(password)
    const user=new userModel({...req.body});
    console.log(user);
    await (user).save();
    res.status(201).send({
        success:true,
        message:'user registered'
 
    })


}



async function userlogin(req,res){
    jwt_secret="JSHDISBCIW";
    try{
        
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).send({
            success:false,
            message:'Invalid email & password'
        })
    }
    const user=await userModel.findOne({email,password})
    console.log(user);
    if(!user){
        return res.status(400).send({
            success:false,
            message:'invalid email'
        })
    }
    // const match=await userModel.findOne({password})
    // console.log(match)
    // if(!match){
    //     return res.status(400).send({
    //         success:false,
    //         message:'invalid password'
    //     })
    // }
    // const match = await bcrypt.compare(password, user.password);
    // if (!match) {
    //     return res.status(400).send({
    //         success: false,
    //         message: 'Invalid password'
    //     });
    // }

    const token=await jwt.sign({_id:user._id},jwt_secret,{expiresIn:"7d"});
    res.status(200).send({
        success:true,
        message:"login succesfully",
        user:{
            name:user.name,
            email:user.email,
            phone:user.phone,
            address:user.address,
            role:user.role,
        },
        token,
    })
}
catch(error){
    console.log(error)

}
}

async function testController(req,res){
    res.send('protected file')
}

module.exports={
    userRegistration,
    userlogin,
    testController,
}




    // const match=await comparePassword(password,user.password);
    // if(!match){
    //     return res.status(400).send({
    //         success:false,
    //         message:"invalid"
    //     })
    // }