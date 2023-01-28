const express = require('express');
const router = express.Router();

router.post("/posts", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Post created successfully"
        })
    } catch (error) {
        res.json(error.message)
    }
});
// get a single post
router.get("/posts/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Post Route"
        })
    } catch (error) {
        res.json(error.message)
    }
});
// get  All post
router.get("/posts", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Post Route"
        })
    } catch (error) {
        res.json(error.message)
    }
});

// Delete Post
router.delete("/post/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete Post Routes"
        })
    } catch (error) {
        res.json(error.message)
    }
});
// Update Post
router.put("/user/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Update Post routes"
        })
    } catch (error) {
        res.json(error.message)
    }
});






module.exports = router;