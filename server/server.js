const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { DB } = require('./config')
const cors = require('cors')

const app = express()

mongoose.connect(
    DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Connected to the database')
        }
    })

//Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use('/assets', express.static('assets'))  //Make folder public
app.use(bodyParser.urlencoded({ extended: false }))

//require APIs
const productRoutes = require('./routes/product')
const categoryRoutes = require('./routes/category')
const ownerRoutes = require('./routes/owner')
const addressRoutes = require('./routes/address')
const userRoutes = require('./routes/auth')
const orderRoutes = require('./routes/order')

app.use('/api', productRoutes)
app.use('/api', categoryRoutes)
app.use('/api', ownerRoutes)
app.use('/api', addressRoutes)
app.use('/api', userRoutes)
app.use('/api', orderRoutes)

app.listen(3000, err => {
    if (err) console.log(err)
    else console.log("Listening to port 3000")
})