

const verifyToken = token => {
    return JsonWebTokenError.verify(token, process.env.JWT_KEY, (err, decode) => {
        if (err) {
            return false;
        } else {
            decode
        }
    })
}


module.exports = verifyToken