//Dependencies
const express = require('express')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

//Middleware
app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to an awesome app about bread')
})

//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsContrller)

//Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})