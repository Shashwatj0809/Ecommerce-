const express=require('express');
const router=express.Router();
const {isRegister,isAdmin}=require('../middleware/authMiddleware')
const {categoryController,updateCategory,categoryCollection,singleCategory,deleteCategory}=require('../Controller/CategoryController')

router.post('/addCategory', isRegister,isAdmin,categoryController );

router.put('/updateCategory/:id', isRegister, isAdmin ,updateCategory);

router.get('/allCategory',categoryCollection);

router.get('/category/:slug', singleCategory);

router.delete('/deleteCategroy',isRegister,isAdmin, deleteCategory);

module.exports=router;