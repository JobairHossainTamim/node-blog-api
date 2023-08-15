const generateToken = require("./generateToken");
const getTokenFromHeaders = require("./getTokenFromHeader");
const User = require("./user.model");
const bcrypt = require("bcryptjs");

const registerCtrl = async (req, res) => {
    try {

        const { firstName, lastName, profilePhoto, email, password } = req.body;
        const userFound = await User.findOne({ email });
        if (userFound) {
            return res.json({
                message: "User Not Found",
            })
        }
        //  hash Password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        //  save Database
        const user = await User.create({
            firstName, lastName, profilePhoto, email, password: hashPassword,
        })
        res.json({
            status: "success",
            message: "User Created successfully",
            data: user
        })

    } catch (error) {
        res.json(error.message)
    }
}

const loginCtrl = async (req, res) => {
    try {

        const { email, password } = req.body;
        // check email 
        const userFound = await User.findOne({ email })

        // check password
        const isPasswordMatch = await bcrypt.compare(password, userFound.password)

        if (!userFound || !isPasswordMatch) {
            return res.json({
                message: "Invalid login Credentials"
            })
        }

        res.json({
            status: "success",
            message: "User Login successfully",
            data: {
                firstName: userFound.firstName,
                lastName: userFound.lastName,
                email: userFound.email,
                isAdmin: userFound.isAdmin,
                token: generateToken(userFound._id)
            }
        })

    } catch (error) {
        res.json(error.message)
    }
}

// profile 

const userProfileCtrl = async (req, res) => {

    const { id } = req.params;
    try {
        // token header 
        getTokenFromHeaders(req)

        const user = await User.findById(id);

        res.json({
            status: "success",
            message: "Profile Data Retrieve successfully",
            data: user
        })
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = { registerCtrl, loginCtrl, userProfileCtrl }

