
const app = require('./app')
const logger = require('./config/logger')
const port = 3000
require('dotenv').config();
const mongoose = require('mongoose')
let dbConnection;
console.log(`${process.env.PORT}`)
if(!dbConnection){
dbConnection= mongoose.connect(process.env.dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then(()=>{
    console.log('connected')
 }).catch(()=>{
    console.log('Error DB')
 });

}else{
    console.log('reusing older connection')
}
app.listen(port,()=>{
    logger.info(`server in running on ${port}`)
})