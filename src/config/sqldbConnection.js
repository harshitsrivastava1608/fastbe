const {Client} = require('pg')
const con =new Client({
    host:"localhost",
    user: "postgres",
    port: 5433,
    password: "postgres",
    database: "userbase"
})
con.connect().then(()=>console.log('connected'))
module.exports ={con};