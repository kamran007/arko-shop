const {Schema, model}=require('mongoose')

const ProductSchema=new Schema({
    productName:{
        type:String,
        required: true,
    },
    isService:Boolean,
    price: Number,
    totalSaleQuantity:Number,
    totalPurchaseQuantity:Number,
    totalStockQuantity:Number
})

module.exports=model('Product',ProductSchema)