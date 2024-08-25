const express = require('express');
const routes = require('./routes/index')
const app = express()
app.use(routes)
app.use((req,res,next)=>{
    res.status(404).send({'msg':'Route Not Found'})
})
module.exports =app