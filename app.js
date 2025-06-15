const express = require('express')
const serverless = require('serverless-http')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get("/user",(req,res)=>{
    res.send('userlist')
})

module.exports.handler = serverless(app)
