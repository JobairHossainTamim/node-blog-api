const express = require('express');
const router = express.Router();

// create
router.post("/categories", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "categories created successfully"
        })
    } catch (error) {
        res.json(error.message)
    }
});
// get a single category
router.get("/categories/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "categories Route"
        })
    } catch (error) {
        res.json(error.message)
    }
});
// get  All categories
router.get("/categories", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "categories Route"
        })
    } catch (error) {
        res.json(error.message)
    }
});

// Delete category routes
router.delete("/categories/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete categories Routes"
        })
    } catch (error) {
        res.json(error.message)
    }
});
// Update categories routes
router.put("/categories/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Update categories routes"
        })
    } catch (error) {
        res.json(error.message)
    }
});





module.exports = router;