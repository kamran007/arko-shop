const {
    getAllStockholder,
    getAllCustomer,
    getAllWholeSeller,
    getSingleStockholder,
    getCustomerInsertForm,
    getWholeSellerInsertForm,
    postSingleStockholder,
    deleteSingleStockholder,
    updateSingleStockholder
}=require('./../controllers/stockholderController')

const {authenticatedUser}=require('./../middlewares/authMiddleware')

const stockholderInsertFormValidation=require('./../validators/stockholderValidation/stockholderValidation')

const router=require('express').Router()

router.get('/',authenticatedUser,getAllStockholder)
router.get('/customer',authenticatedUser,getAllCustomer)
router.get('/wholeseller',authenticatedUser,getAllWholeSeller)
router.get('/insertCustomer',authenticatedUser,getCustomerInsertForm)
router.get('/insertWholeseller',authenticatedUser,getWholeSellerInsertForm)
router.post('/insert',authenticatedUser,stockholderInsertFormValidation,postSingleStockholder)
router.post('/update',authenticatedUser,updateSingleStockholder)
router.get('/delete/:id',authenticatedUser,deleteSingleStockholder)
router.get('/:id',authenticatedUser,getSingleStockholder)

module.exports=router