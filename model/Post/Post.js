const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Post Title Is Required"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Description Is Required"],
        trim: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Post Category Is Required"],

    },
    numViews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    disLikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Please Author  The User"]
    },
    photo: {
        type: String,
        required: [true, "Post Image Is Required"]
    },

}, {
    timestamps: true,
})

// compile The Post Module

const Post = mongoose.model('Post',postSchema)

module.exports = Post;