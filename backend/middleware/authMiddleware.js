const userModel=require('../models/userModel')
const jwt=require('jsonwebtoken');
jwt_secret="JSHDISBCIW"

async function isRegister(req,res,next){
    
    try{
        const decode=jwt.verify(req.headers.authorization,jwt_secret )
        next()
    }
    catch(error){
        console.log(error);     
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

};
async function isAdmin(req,res,next){
    try{
        const decode=jwt.verify(req.headers.authorization,jwt_secret);
        const role=decode.role;
        // const role=req.body.role;
        console.log("hi");
        // const role=req.body.role;
        // const user=await userModel.findById(req.body._id);
        if(role===0){
            return res.status(401).send({
                success:false,
                message:"unAuthorised"
            })
        }
         next();


    }
    catch(error){
        console.log(error);
        return res.status(401).json({ success: false, message: "forbidden" });
    }
}


module.exports={
    isRegister,
    isAdmin
}

