const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    text: { type: String, unique: true, required: true }
})

module.exports = mongoose.model("Category", CategorySchema)