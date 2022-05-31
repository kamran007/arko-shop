const {body}=require('express-validator')
const User=require('./../../models/user')

module.exports=[
    body('username')
    .isLength({min:2,max:15}).withMessage("username must be between 2 to 15 characters"),

    body('password')
    .isLength({min:1 }).withMessage("password cannot be empty")
]