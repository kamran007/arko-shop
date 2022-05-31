const authRoute=require("./authRoute")
const dashboardRoute=require('./dashboardRoute')
const stockholderRouter=require('./stockholderRoute')
const productRoute=require('./productRoute')
const saleRoute=require('./saleRoute')

const Flash=require('./../utils/Flash')

const {unAuthenticatedUser}=require('./../middlewares/authMiddleware')


const routes=[
    {
        path:'/auth',
        handler:authRoute
    },
    {
        path: '/dashboard',
        handler:dashboardRoute
    },
    {
        path:'/stockholder',
        handler:stockholderRouter
    },
    {
        path: '/product',
        handler: productRoute
    },
    {
        path:'/sale',
        handler: saleRoute
    },
    {
        path:'/',
        handler:(req,res)=>{
            res.render('pages/login',{
                title:'LogIn',
                errors:{},
                flashMessage:Flash.getMessage(req)
            })
        }
    }
]

module.exports=app=>{
    routes.forEach(e=>{
        app.use(e.path,e.handler)
    })
}