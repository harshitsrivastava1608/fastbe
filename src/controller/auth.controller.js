const logger = require('./../config/logger')
const register = async(req,res) => {
    logger.info('server in running')
    res.status(201).send({'msg':'Created'});
}
module.exports = {register}