const express = require('express');
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
    try {

        res.json({
            status: "Register Success",
            data: "register"
        })
    } catch (error) {
        res.json(error.message)
    }
})

// Login
router.post("/login", async (req, res) => {
    try {

        res.json({
            status: "Login Success",
            data: "Login"
        })
    } catch (error) {
        res.json(error.message)
    }
})
// All User
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
//Get Profile id
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