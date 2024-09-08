const mongoose =require('mongoose')
const userBaseSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type:String,
    }
});
const User =new mongoose.model('userbase',userBaseSchema);
module.exports={User}