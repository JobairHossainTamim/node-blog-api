const express = require('express');
const router = express.Router();

router.post("/comments", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Comment created successfully"
        })
    } catch (error) {
        res.json(error.message)
    }
});
// get a single comment
router.get("/comments/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Comment Route"
        })
    } catch (error) {
        res.json(error.message)
    }
});
// get  All comment
router.get("/comments", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Comment Route"
        })
    } catch (error) {
        res.json(error.message)
    }
});

// Delete comment
router.delete("/comments/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete Comment Routes"
        })
    } catch (error) {
        res.json(error.message)
    }
});
// Update comment
router.put("/comments/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Update Comment routes"
        })
    } catch (error) {
        res.json(error.message)
    }
});




module.exports = router;