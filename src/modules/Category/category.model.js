const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,

    },
    title: {
        type: String,
        required: [true, "Title Is Required"],
    },


}, {
    timestamps: true,
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;