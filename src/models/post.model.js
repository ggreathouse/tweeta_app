const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: false
        },
        userId: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = mongoose.model('post', postSchema)