/**
 * @param {*} roles
 * Check the role of the user for authorization
 */
const checkRole = roles => (req, res, next) => !roles.includes(req.user.role) ? res.status(401).json('Unauthorized') : next()

const serializeUser = user => {
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        updatedAt: user.updatedAt,
        createdAt: user.createdAt
    }
}

module.exports = {
    checkRole,
    serializeUser
}