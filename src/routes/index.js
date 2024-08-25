const express = require('express')
const router = express.Router()
const authRoute = require('./auth.route')
const mainRoute = require('./main.route')
const defaultRoutes = [
    {
        path: '/auth',
        route : authRoute
    },
    {
        path: '',
        route :  mainRoute
    }
]
defaultRoutes.forEach((route)=>{
    router.use(route.path,route.route)
})
module.exports = router;