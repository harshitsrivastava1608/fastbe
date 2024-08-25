const logger = require('./../config/logger')
const handler = async(req,res) => {
    logger.info('server in running')
    res.status(201).send({'msg':'API Responded Successfully'});
}
module.exports = {handler}