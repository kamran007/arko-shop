const {Schema,model}=require('mongoose')

const SaleSchema=new Schema({
    saleTo:{
        type:Schema.Types.ObjectId,
        ref: 'Stockholder',
        required:true
    },
    saleBy:{
        type:Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    item:[{
        itemName:String,
        price:Number,
        unit:Number,
        total:Number
        
    }],
    payable: Number,
    discount:Number,
    paid: Number,
    due:Number
},{
    timestamps:true
})
module.exports=model('Sale',SaleSchema)