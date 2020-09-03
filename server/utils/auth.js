const jwt = require('jsonwebtoken')
const User = require('../models/user')
const bcrypt = require('bcrypt-nodejs')
const { SECRET } = require('../config')

/**
 * 
 * @param {username, password} userCred 
 * @param req 
 * Login the user -- user, admin, super_admin
 */
const login = async (userCred, res) => {
    let { username, password } = userCred
    const user = await User.findOne({ username })

    //Check if username is in database
    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'Invalid login credential'
        })
    }

    //Check password, if match sign jwt
    bcrypt.compare(password, user.password, (err, result) => {
        if (err) return callback(err)
        if (result) {
            let token = jwt.sign({
                role: user.role,
                email: user.email,
                user_id: user._id,
                username: user.username,
            }, SECRET, {
                expiresIn: "7 days"
            })

            let result = {
                username: user.username,
                role: user.role,
                email: user.email,
                token: `Bearer ${token}`,
                expiresIn: 168
            }

            return res.status(200).json({
                ...result,
                message: 'Logged in',
                success: true
            })
        } else {
            return res.status(403).json({
                success: false,
                message: 'Invalid credentials'
            })
        }
    })
}

/**
 * @param {*} roles
 * Check the role of the user for authorization
 */
const checkRole = roles => (req, res, next) => !roles.includes(req.user.role) ? res.status(401).json('Unauthorized') : next()


module.exports = {
    login,
    checkRole,
}