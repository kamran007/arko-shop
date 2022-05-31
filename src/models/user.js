const {Schema,model}=require('mongoose')

const userSchema=new Schema({
    username:{
        type: String,
        required:true,
        maxlength:15,
        minLength:2,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        trim: true,
    }
},{
    timestamps:true
})
module.exports=model('User',userSchema)