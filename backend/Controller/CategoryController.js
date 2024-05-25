
const slugify=require('slugify');
const categoryModel=require('../models/category')

async function categoryController(req,res){
    try{
        const {name}=req.body;
        if(!name){
            return res.status(400).send({message:'Name required'});
        }
        const CategoryPresent=await categoryModel.findOne({name});
        if(CategoryPresent){
            return res.status(200).send({
                message:"alreday exist",
                success:true,
            })
        }
        const categroy=await new categoryModel({name, slug:slugify(name)}).save();
        res.status(201).send({
            success:true,
            message:"added",
            categroy,
        });


    }
    catch(error){
        console.log(error);
        return res.status(500).json({ success: false, message: "category addition failed" });

    }
}

async function updateCategory(req,res){
    try{
        const {name}=req.body;
        const {id}=req.params;
        console.log(id);
        console.log(name);

        const category=await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(201).send({
            success:true,
            message:"updated",
            category,
        });
        } 

    
    catch(error){
        console.log(error);
        return res.status(401).json({ success: false, message: "Update failed" });
    }

}

async function categoryCollection(req,res){
    const category=await categoryModel.find({})
    try{
        res.status(200).send({
            message:"All categories are there",
            success:"true",
            category,
        }
        )
    

    }
    catch(error){
        console.log(error);
        return res.status(401).json({ success: false, message: "Collection NOT found" });
    }
}

async function singleCategory(req,res){
    try{
        const slug=req.paarms;
        const category=await categoryModel.findOne(slug);
        res.status(200).send({
            message:"Indivisual Categories are there",
            succes:"true",
            category,
        })

    }
    catch(error){
        console.log(error);
        return res.status(401).json({ success: false, message: "Indivisual collection NOT found" });


    }
}

async function deleteCategory(req,res){
    try{
        const id=req.params;
        const category=await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            message:"Deleted",
            success:"true",
            category
        })
    }
    catch(error){
        console.log(error);
        return res.status(401).json({ success: false, message: "Indivisual collection NOT found" });
    }
}


module.exports={
    categoryController,
    updateCategory,
    categoryCollection,
    singleCategory,
    deleteCategory
}