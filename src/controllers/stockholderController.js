const Stockholder=require('./../models/stockholder')
const Flash=require('./../utils/Flash')
const {validationResult}=require('express-validator')
const errorFormatter=require('./../utils/validationErrorFormatter')

module.exports.getAllStockholder= async(req,res)=>{
    try{
        let stockholders= await Stockholder.find()
        res.render('pages/stockholder.ejs',{
            title: 'Stockholder',
            stockholders,
            flashMessage:Flash.getMessage(req)
        })
    }
    catch(e){
        console.log(e)
    }
}

module.exports.getAllCustomer= async (req,res)=>{
    try{
        let stockholders= await Stockholder.find({type:'Customer',status: true})
        res.render('pages/stockholder.ejs',{
            title: 'Customer',
            stockholders,
            flashMessage:Flash.getMessage(req)
        })
    }
    catch(e){
        console.log(e)
    }
}

module.exports.getAllWholeSeller= async (req,res)=>{
    try{
        let stockholders= await Stockholder.find({type:'Wholeseller',status:true})
        res.render('pages/stockholder.ejs',{
            title: 'Wholeseller',
            stockholders,
            flashMessage:Flash.getMessage(req)
        })
    }
    catch(e){
        console.log(e)
    }
}

module.exports.getSingleStockholder=(req,res)=>{
    res.send('get Single Stockholder')
}

module.exports.getCustomerInsertForm=(req,res)=>{
    res.render('pages/stockholderInsertForm',{
        title:'Customer',
        errors:{},
        flashMessage: Flash.getMessage(req)
    })
}

module.exports.getWholeSellerInsertForm=(req,res)=>{
    res.render('pages/stockholderInsertForm',{
        title:'Wholeseller',
        errors:{},
        flashMessage: Flash.getMessage(req)
    })
}

module.exports.postSingleStockholder=(req,res)=>{

    let {name,bio,address,phone,type,status} =req.body
    let errors=validationResult(req).formatWith(errorFormatter)
    if(!errors.isEmpty()){
        req.flash('fail','check your form')
        return res.render('pages/stockholderInsertForm',{
            title:type,
            errors:errors.mapped(),
            flashMessage:Flash.getMessage(req)
        })
    }
    try{
        let stockholder=new Stockholder({
            name,
            bio,
            address,
            phone,
            type,
            status : status=='on'? true: false,
            payable:0,
            paid:0,
            due: 0
        })
        stockholder.save()
        req.flash('success',`new ${type} created successfully`)
        return res.redirect('/dashboard')
    }
    catch(e){
        console.log(e)
    }
}

module.exports.updateSingleStockholder= async (req,res)=>{
    let {id,name,bio,address, phone, type,status, payable, paid,due }=req.body
    //console.log(id,name,bio,address, phone, type,status, payable, paid,due)
    try{
        await Stockholder.findOneAndUpdate(
            {
                _id:id
            },{
                $set:{
                    name,
                    bio,
                    address,
                    phone,
                    type,
                    status: status=='on' ? true: false,
                    payable: parseInt(payable),
                    paid: parseInt(paid),
                    due: parseInt(due)
                }
            },{
                new:true
            })
            req.flash('success',`Shockholder ${name} is updated successfully`)
            res.redirect('/dashboard')
    }
    catch(e){
        console.log(e)
    }
}

module.exports.deleteSingleStockholder= async (req,res)=>{
    let {id}=req.params
    try{
        await Stockholder.findOneAndDelete({_id:id})
        req.flash('success','Stockholder deleted successfully')
        res.redirect('/dashboard')
    }
    catch(e){
        console.log(e)
    }
}