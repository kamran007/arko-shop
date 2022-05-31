const {Schema,model}=require('mongoose')

const StockholderSchema=new Schema({
    name:{
        type: String,
        required:true,
        maxlength:15,
        minLength:2,
        trim:true
    },
    picture: String,
    bio:{
        type: String,
        maxlength:15,
        trim:true
    },
    status:Boolean,
    type:String,
    address: String,
    phone:String,
    payable:Number,
    paid:Number,
    due:Number
},{
    timestamps:true
})

module.exports=model('Stockholder',StockholderSchema)