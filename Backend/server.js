const express = require('express')
const app = express()
require('./DB/con')
const users= require('./models/schema')
const cors = require('cors')
const router = require('./routes/route')


app.use(cors())
app.use(express.json())
app.use(router)

app.get("/",(req,res)=>{
    res.send("<h1>Jay Shivray</h1>")
}).listen(8080)