const {con} = require('../config/sqldbConnection');
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
const createUser = async(req,res)=>{
    console.log('req',req.body);
   const {email,name}=req.body;
   await con.query('INSERT INTO userbase (name,email) VALUES ($1,$2) RETURNING *',[name,email],(error,results)=>{
    if(error)
        throw error;
    res.status(201).send('User Added!')
   })
}
module.exports = {handler,createUser}