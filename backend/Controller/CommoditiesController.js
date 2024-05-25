const productModel=require('../models/comodities');
const fs=require('fs');
const slugify=require('slugify')

async function createProduct(req,res){
    try{
        console.log(req.fields);
        // const fields=req.fields;
        // const files=req.files;
        const {name ,slug,description,price,quantity,category}=req.fields;
        const {photo}=req.files;

        switch(true){
            case !'name':
                return res.status(401).json({ success: false, message: "Name required" })
            case !slug:
                return res.status(401).json({ success: false, message: "slug required" })
            case !description:
                return res.status(401).json({ success: false, message: "description required" })
            case !price:
                return res.status(401).json({ success: false, message: "price required" })
             case !quantity:
                return res.status(401).json({ success: false, message: "quantity required" })
            case !category:
                 return res.status(401).json({ success: false, message: "category required" })
            case !photo && photo.size>10000:
                return res.status(401).json({ success: false, message: "photo required and photo should be within 10mb" });
                   
        }
        const product=new productModel({...req.fields,slug:slugify('name')})
        if(photo){
            product.photo.data=fs.readFileSync(photo.path);
            product.photo.contentType=photo.type;
        }
        await product.save();
        res.status(201).send({
            success:true,
            message:"product created",
            product
        })
    }
    catch(error){
        console.log(error);
        return res.status(401).json({ success: false, message: "product not created" });
    }

}

async function productList(req,res){
    try{
        const product=await productModel.find({}).populate("category");
        console.log(product.category, product);
        res.status(201).send({
            success:"true",
            message:"All product",
            product
        })

    }
    catch(error){
        console.log(error);
        return res.status(401).json({success:false,message:"product not found"})

    }
}

async function singleProduct(req,res){
    try{
        const slug=req.params;
        const product=await productModel.findOne(slug).populate("category");
        res.status(201).send({
            success:"true",
            message:"Single product",
            product
        })       

    }
    catch(error){
        console.log(error);
        return res.status(401).json({success:false,message:"product not found"})
    }
}

async function deleteProduct(req,res){
    try{
        const id=req.params;
        const product=await productModel.findByIdAndDelete(id);
        res.status(200).send({
            message:"Deleted",
            success:"true",
            product
        })

    }
    catch(error){
        console.log(error);
        return res.status(401).json({success:false,message:"Delete failed"})
    }
}

module.exports={
    createProduct,
    productList,
    singleProduct,
    deleteProduct
}