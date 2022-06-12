const ChiefModel=require('./chief.model')
// const fs = require('fs');
// const path = require('path');
// const upload = require('../teachers/upload');
async function getChief(req,res) {
    try{
        const Chief=await ChiefModel.find({})
        return res.status(200).send(Chief)
    }catch(err){
        res.status(400).send(err)
    }
}


async function addChief(req,res) {
    try{
        // let image =req.file.originalname
        

        const category = new ChiefModel({
            name:req.body.name,
            lastName:req.body.lastName,
            tel:req.body.tel,
            email:req.body.email,
            faculty:req.body.faculty,
            login:req.body.login,
            password: req.body.password,
            example:req.body.example,
            date:new Date(),
        })
      
        category.save((err, category) => {
            if (err) {
                console.log(err)
                return res.status(400).json({
                    errors: err.meesage
                })
            }
            return res.json({
                message: "Created category successfully",
                category
            })
        })
    }catch(err){
        res.status(400).send(err)
    }
}

async function updateChief(req,res) {
    try{
        let userId=req.params.id
        // let del= await ChiefModel.findOne({userId})
        
        // console.log(del.imagePath);

        // fs.unlink( `/home/kali/theBest/EducationMERN/backend/uploads/${del.imagePath}`, function (err) {            
        //     if (err) {                                                 
        //         console.error(err);                                    
        //     }                                                          
        //    console.log('File has been Deleted');                           
        // }); 
        // let image =req.file.originalname
        let category = ({
            name:req.body.name,
            lastName:req.body.lastName,
            tel:req.body.tel,
            email:req.body.email,
            faculty:req.body.faculty,
            login:req.body.login,
            password: req.body.password,
        })
        let result=await ChiefModel.findByIdAndUpdate(userId,category)
      
        return res.status(200).send(result)
    }catch(err){
        res.status(404).send(err)
    }
}

async function deleteChief(req,res) {
    try{
        
       
        let userId=req.params.id
        // let del= await ChiefModel.findOne({userId})
        
        // console.log(del.imagePath);

        // fs.unlink( `/home/kali/theBest/EducationMERN/backend/uploads/${del.imagePath}`, function (err) {            
        //     if (err) {                                                 
        //         console.error(err);                                    
        //     }                                                          
        //    console.log('File has been Deleted');                           
        // }); 

        let result=await ChiefModel.findByIdAndDelete(userId)
        // console.log(del.imagePath); 
        // fs.unlinkSync();
      

        return res.status(200).send(result)
    }catch(err){
        res.status(400).send(err)
    }
}


module.exports = {
  getChief,
  addChief,
  updateChief,
  deleteChief,
};