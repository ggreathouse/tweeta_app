const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            unique: false,
            required: true,
        },
        description: {
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