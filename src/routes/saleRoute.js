const router=require('express').Router()
const {authenticatedUser}=require('./../middlewares/authMiddleware')

const {
    getAllSale,
    getSaleInsertForm,
    postSaleInsertForm,
    getUpdateSaleForm,
    postUpdateForm
}=require('./../controllers/saleController')

router.get('/',authenticatedUser,getAllSale)
router.get('/insert',authenticatedUser,getSaleInsertForm)
router.post('/insert',authenticatedUser,postSaleInsertForm)
router.post('/update',authenticatedUser,postUpdateForm)
router.get('/update/:id',authenticatedUser,getUpdateSaleForm)

module.exports=router