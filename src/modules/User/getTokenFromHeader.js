
const getTokenFromHeaders = req => {
    // token header 
    const headerObj = req.headers;
    const token = headerObj['authorization'].split(" ")[1];

    if (token !== undefined) {
        return token;
    }
    else {
        return {
            status: "failed",
            message: "There is No token available"
        }
    }
}

module.exports = getTokenFromHeaders;