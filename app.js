// Import Module
const express=require('express');
const mongoose=require('mongoose')
// const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const path=require('path')

//import Route file from this project
const setRoutes=require('./src/routes/routes')
const setMiddleware=require('./src/middlewares/middlewares.js')


//Port Configuration, Uri 
const PORT=process.env.PORT
const con_string=process.env.DBSTR


// Configure Express
const app=express();

//view engine setting
app.set('view engine','ejs')
app.set('views',path.resolve(__dirname,'./src/views'))

//static folder setup
app.use('/static',express.static(path.join(__dirname,'./src/public/')))

//Middleware setup
setMiddleware(app)

//route setup
setRoutes(app)

//Server port Configuration
mongoose.connect(con_string,{
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useUnifiedTopology:true,
    // useFindAndModify:false

    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    // serverApi: ServerApiVersion.v1
})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on http://localhost:${PORT}`)
    })
}).catch(e=>{
    console.log(e)
})
// const client = new MongoClient(con_string, { 
    // useNewUrlParser: true, 
    // useUnifiedTopology: true, 
    // serverApi: ServerApiVersion.v1 
// });
// client.connect(err => {
//   const collection = client.db("arko-shop").collection("users");
//   // perform actions on the collection object
//   client.close();
// });
