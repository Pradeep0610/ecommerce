const jwt = require('jsonwebtoken')
const User = require('../models/user')
const router = require('express').Router()
const { login } = require('../utils/auth')
const verifyToken = require('../middlewares/verify-token')


//Signup Route
router.post('/auth/signup', async (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            message: "Please provide email or password"
        })
    } else {
        try {
            let newUser = new User()
            newUser.name = req.body.name
            newUser.email = req.body.email
            newUser.username = req.body.username
            newUser.password = req.body.password
            await newUser.save()

            res.json({
                success: true,
                message: "Successfully registered."
            })
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err.message
            })
        }
    }
})

//Profile Route
router.get('/auth/user', verifyToken, async (req, res) => {
    try {
        let foundUser = await User.findOne({ _id: req.decoded._id }).populate("address")

        if (foundUser) {
            res.json({
                success: true,
                user: foundUser
            })
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

//Login Route
router.post('/auth/login', async (req, res) => {
    try {
        await login(req.body, res)

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router