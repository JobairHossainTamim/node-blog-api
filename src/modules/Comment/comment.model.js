const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({

    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        require: [true, "Post Is Required"]

    },
    user: {
        type: Object,
        required: [true, "User Is Required"],
    },
    description: {
        type: String,
        required: [true, "Post Comment Description is Required"],
    }

}, {
    timestamps: true,
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;