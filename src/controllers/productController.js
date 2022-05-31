const Flash=require('./../utils/Flash')
const Product=require('./../models/product')

module.exports.getProductInsertForm=(req,res)=>{
    res.render('pages/productInsertForm',{
        title: "Product",
        errors:{},
        flashMessage:Flash.getMessage(req)

    })
}
module.exports.postProductInsertForm=(req,res)=>{
    let {productName,price,isService}=req.body
    try{
        let product=new Product({
            productName,
            isService: isService =='on' ? true : false,
            price,
            totalSaleQuantity: 0,
            totalPurchaseQuantity: 0,
            totalStockQuantity: 0
        })
        product.save()
        req.flash('success',`New ${productName} is added`)
        res.redirect('/product/insert')
    }
    catch(e){
        console.log(e)
    }

}

module.exports.getAllProduct= async (req,res)=>{
    try{
        let products= await Product.find()
        res.render('pages/product',{
            title: 'Product',
            products,
            errors:{},
            flashMessage:Flash.getMessage(req)
        })
    }
    catch(e){
        console.log(e)
    }
}
module.exports.updateProduct= async (req,res)=>{
    try{
        let {
            id,
            productName,
            price,
            isService,
            totalSaleQuantity,
            totalPurchaseQuantity,
            totalStockQuantity
        }=req.body
        await Product.findOneAndUpdate(
            {
                _id:id
            },{
                $set:{
                    productName,
                    price,
                    isService: isService =='on',
                    totalSaleQuantity,
                    totalPurchaseQuantity,
                    totalStockQuantity
                }
            },{
                new: true
            }
        )
        req.flash('success',`${productName} is updated`)
        res.redirect('/dashboard')

    }
    catch(e){
        console.log(e)
    }
}

module.exports.deleteProduct=async (req,res)=>{
    try{
        let {id}=req.params
        await Product.findOneAndDelete({_id:id})
        req.flash('success','Product Deleted')
        res.redirect('/dashboard')
    }
    catch(e){
        console.log(e)
    }
}