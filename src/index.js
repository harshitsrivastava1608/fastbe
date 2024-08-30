
const app = require('./app')
const logger = require('./config/logger')
const port = 3000
app.listen(port,()=>{
    logger.info(`server in running on ${port}`)
})