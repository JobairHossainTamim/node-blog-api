const express = require('express');
const router = express.Router();
const isLogin = require('../../middlewares/isLogin');

const {
    userRegisterCtrl,
    userLoginCtrl,
    UserCtrl,
    UserProfileCtrl,
    userDeleteCtrl,
    userUpdateCtrl } = require('../../controllers/Users/userCtrl');



// for registration
router.post("/register", userRegisterCtrl);
// for Login

router.post("/login", userLoginCtrl);
// get user id

router.get("/user/profile/",isLogin, UserProfileCtrl);
// All User
router.get("/user", UserCtrl);

// Delete user
router.delete("/user/:id", userDeleteCtrl);
// update user
router.put("/user/:id", userUpdateCtrl);



module.exports = router;
