const db = require('mongoose')

const url = "mongodb://localhost:27017/crud;"

db.connect(url,(err,client)=>{
    console.log("Your Are successfully connected with the database")
})