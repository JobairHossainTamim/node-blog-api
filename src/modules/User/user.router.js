const express = require('express');
const { registerCtrl, loginCtrl, userProfileCtrl } = require('./user.ctrl');
const isLogin = require('../../middleware/isLogin');
const router = express.Router();

// Register
router.post("/register", registerCtrl);

// Login
router.post("/login", loginCtrl);
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
router.get("/:id", isLogin, userProfileCtrl)
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