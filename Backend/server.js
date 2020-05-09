const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')

require('dotenv').config()


const app=express()
const port =process.env.PORT ||5000


app.use(cors())
app.use(express.json())

const uri=process.env.CONNECT//"mongodb://127.0.0.1:27017/task-manager-api"

mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true})

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log(1)
})
const exerciseRouter=require('./routes/exercises')
const userRouter=require('./routes/users')

app.use('/exercise',exerciseRouter)
app.use('/users',userRouter)


app.listen(port,()=>{
console.log('ok')

})