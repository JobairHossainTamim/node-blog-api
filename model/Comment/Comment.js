const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: [true, "Post is required"]
    },
    user: {
        type: Object,
        required: [true, "User is required"]
    },
    descriptions: {
        type: String,
        required: [true, "Descriptions is required"]
    },

}, { timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;