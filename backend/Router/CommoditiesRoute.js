const express=require('express');
const router=express.Router();
const {isRegister,isAdmin}=require('../middleware/authMiddleware');
const {createProduct,productList,singleProduct,deleteProduct}=require('../Controller/CommoditiesController')
const formidable=require('express-formidable');

router.post('/create',isRegister,isAdmin,formidable(),createProduct);

router.get('/productList',productList);

router.get('/singleProduct/:slug',singleProduct);

router.delete('/singleDelete',isRegister,isAdmin,deleteProduct);

module.exports=router;