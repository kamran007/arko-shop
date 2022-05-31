const {body}=require('express-validator')
const Stockholder=require('./../../models/stockholder')

module.exports=[
    body('name')
    .isLength({min:2,max:15}).withMessage("Name must be between 2 to 15 characters")
    .custom(async name=>{
        let user=await Stockholder.findOne({name})
        if(user){
            return Promise.reject("Name Already Used")
        }
    })
    .trim()
]