const getTokenFromHeader = req => {

    const headerOBJ = (req.headers)
    const token = headerOBJ["authorization"].split(" ")[1];

    if (token !== undefined) {
        return token
    }
    else {
        return false;
    }
}

module.exports = getTokenFromHeader;