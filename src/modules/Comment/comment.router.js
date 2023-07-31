const express = require('express');
const router = express.Router();

// Comment Data 
router.post("/posts", async (req, res) => {
    try {

        res.json({
            status: "Register Success",
            data: "register"
        })
    } catch (error) {
        res.json(error.message)
    }
})

// All Comment
router.get("/", async (req, res) => {
    try {

        res.json({
            status: " Success",
            data: "register"
        })
    } catch (error) {
        res.json(error.message)
    }
})
//Get single Comment id
router.get("/:id", async (req, res) => {
    try {

        res.json({
            status: "Success",
            data: "register"
        })
    } catch (error) {
        res.json(error.message)
    }
})
// Delete
router.delete("/:id", async (req, res) => {
    try {

        res.json({
            status: "Success",
            data: "register"
        })
    } catch (error) {
        res.json(error.message)
    }
})
// Update

router.put("/:id", async (req, res) => {
    try {

        res.json({
            status: "Success",
            data: "register"
        })
    } catch (error) {
        res.json(error.message)
    }
})

module.exports = router;