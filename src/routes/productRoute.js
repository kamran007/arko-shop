const router=require('express').Router()
const {
    getProductInsertForm,
    postProductInsertForm,
    getAllProduct,
    updateProduct,
    deleteProduct
}=require('./../controllers/productController')

const {authenticatedUser}=require('./../middlewares/authMiddleware')


router.get('/insert',authenticatedUser ,getProductInsertForm)
router.post('/insert', authenticatedUser,postProductInsertForm)
router.post('/update',authenticatedUser,updateProduct)
router.get('/delete/:id',authenticatedUser,deleteProduct)
router.get('/',authenticatedUser,getAllProduct)
module.exports=router