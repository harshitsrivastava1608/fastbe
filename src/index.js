
const app = require('./app')
const logger = require('./config/logger')
app.listen(3000,()=>{
    logger.info('server in running')
})