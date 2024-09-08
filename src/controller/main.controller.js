const { User } = require('../models/userbase.model');
const logger = require('./../config/logger')
const handler = async(req,res) => {
    logger.info('server in running')
    // const userDoc = new User({name:'Aashu'});
    // const addUser = await userDoc.save();
    // console.log('add',addUser);
    const userList =await User.find({});
    console.log('userllist',userList);
    res.status(201).send({'msg':'API Responded Successfully'});
}
module.exports = {handler}