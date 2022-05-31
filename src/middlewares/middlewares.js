require('dotenv').config()
const express=require('express')
const morgan=require('morgan')
const session=require('express-session')
const Flash=require('connect-flash')
const MongoDBStore=require('connect-mongodb-session')(session)

const {bindUserRequest}=require('./authMiddleware')
const setLocal=require('./setLocals')


const con_string=process.env.DBSTR

const store=new MongoDBStore({
    uri: con_string,
    collection: 'session'
})

const middleware=[
    morgan('dev'),
    express.json(),
    express.urlencoded({extended:true}),
    session({
        secret: process.env.SECRET_KEY,
        resave:false,
        saveUninitialized:true,
        cookie:{
            maxAge: 1000*60*60*2
        },
        store: store

    }),
    bindUserRequest(),
    setLocal(),
    Flash()
]

module.exports=app=>{
    middleware.forEach(e=>{
        app.use(e)
    })
}