const router=require('express').Router()

const {
    getLoginController,
    getSignupController,
    postLoginController,
    postSignupController,
    logOutControlller
}=require('./../controllers/authController')
const signupValidator = require('./../validators/authValidator/signupValidator')
const loginValidation=require('./../validators/authValidator/loginValidation')

const {authenticatedUser,unAuthenticatedUser}=require('./../middlewares/authMiddleware')

router.get('/signup',authenticatedUser,getSignupController)
router.post('/signup',authenticatedUser, signupValidator,postSignupController)

// router.get('/signup',getSignupController)
// router.post('/signup',signupValidator,postSignupController)

router.get('/login',unAuthenticatedUser,getLoginController)
router.post('/login',unAuthenticatedUser,loginValidation ,postLoginController)
router.get('/logout',authenticatedUser, logOutControlller)

module.exports=router