const getTokenFromHeaders = require("../modules/User/getTokenFromHeader")
const verifyToken = require("./verifyToken")


const isLogin = (req, res, next) => {
    // get token from header

    const token = getTokenFromHeaders(req)
    // verify token
    const decodeUser = verifyToken(token)

    req.userAuth = decodeUser.id
    if (!token) {
        return res.json({
            message: " There is no token attached to the request header"
        })
    } else {
        next();
    }

    // save the user into req obj


}

module.exports = isLogin