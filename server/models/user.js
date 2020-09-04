const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user', enum: ["user", "admin", "superadmin"] },
    address: { type: Schema.Types.ObjectId, ref: 'Address' }
}, { timestamps: true })

UserSchema.pre("save", function (next) {
    let user = this
    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                return next(err)
            }

            bcrypt.hash(user.password, salt, null, (err, hash) => {
                if (err) {
                    return next(err)
                }

                user.password = hash
                next()
            })
        })
    } else {
        return next()
    }
})

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', UserSchema)