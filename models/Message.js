const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    from: String,
    title: String,
    email: String,
    message: String,
    date: Date
})

module.exports = mongoose.model('Message', MessageSchema)