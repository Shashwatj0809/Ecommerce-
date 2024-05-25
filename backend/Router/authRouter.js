const express=require('express');
const router=express.Router();
const {userRegistration,userlogin,testController}=require('../Controller/authController');
const {isRegister,isAdmin}=require('../middleware/authMiddleware')

router.post('/register',userRegistration);
router.post('/login',userlogin);
router.post('/test',isRegister, testController);
router.get('/auth-check' , isRegister, (req,res)=>{
    res.status(200).send({ok:true});
})
router.get('/admin-check',isAdmin, (req,res)=>{
    res.status(200).send({ok:true});
}) 
module.exports=router;