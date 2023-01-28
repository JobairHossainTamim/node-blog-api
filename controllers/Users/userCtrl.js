const express = require('express');
const User = require("../../model/User/User");
const bcrypt = require('bcryptjs');
const generateToken = require('../../utils/generateToken');
const getTokenFromHeader = require('../../utils/getTheToken');
const appErr = require("../../utils/appErr");


// registration
const userRegisterCtrl = async (req, res, next) => {
    try {

        const { firstName, lastName, profilePhoto, email, password } = req.body;

        const userFound = await User.findOne({ email });
        if (userFound) {
            return next(appErr(" User Already Exist", 500))
        }

        // hash Password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)
        // create the user
        const user = await User.create({
            firstName, lastName, profilePhoto, email, password: hashPassword
        })

        res.json({
            status: "success",
            data: user,
        })
    } catch (error) {
        next(appErr(error.message));
    }
}

// login

const userLoginCtrl = async (req, res) => {
    const { email, password } = req.body;

    try {
        // if email exist
        const userFound = await User.findOne({ email });
        if (!userFound) {
            return res.json({
                msg: "Invalid login Credential"
            })
        }
        // verify of the password
        const passwordMatched = await bcrypt.compare(password, userFound.password)

        if (!passwordMatched) {
            return res.json({
                msg: "Invalid Login Credential "
            })
        }

        res.json({
            status: "success",
            data: {
                firstName: userFound.firstName,
                lastName: userFound.lastName,
                email: userFound.email,
                isAdmin: userFound.isAdmin,
                token: generateToken(userFound._id)
            },
        })
    } catch (error) {
        res.json(error.message)
    }
}

const UserCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Profile Routes"
        })
    } catch (error) {
        res.json(error.message)
    }
}
// Profile
const UserProfileCtrl = async (req, res) => {

    try {
        const user = await User.findById(req.userAuth);

        res.json({
            status: "success",
            data: user,
        })
    } catch (error) {
        res.json(error.message)
    }
}


const userDeleteCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete user Routes"
        })
    } catch (error) {
        res.json(error.message)
    }
}


const userUpdateCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Update user routes"
        })
    } catch (error) {
        res.json(error.message)
    }
}



module.exports = {
    userRegisterCtrl,
    userLoginCtrl,
    UserCtrl,
    UserProfileCtrl,
    userDeleteCtrl,
    userUpdateCtrl

}