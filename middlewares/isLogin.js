const appErr = require("../utils/appErr");
const getTokenFromHeader = require("../utils/getTheToken");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
    // ger token

    const token = getTokenFromHeader(req);

    // verify token 
    const decodedUser = verifyToken(token);

    // Save the user
    req.userAuth =decodedUser.id


    if (!decodedUser) {
        return next (appErr("Invalid /Expire Token ,please Login Again",500))
    }
    else {
        next();
    }

}

module.exports = isLogin;