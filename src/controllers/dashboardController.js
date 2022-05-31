const User=require('./../models/user')
const errorFormatter=require('./../utils/validationErrorFormatter')
const Flash=require('./../utils/Flash')
module.exports.getDashboard=(req,res)=>{
    res.render('pages/dashboard.ejs',{
        title: 'Dashboard',
        errors:{},
        flashMessage:Flash.getMessage(req)
    })
}
