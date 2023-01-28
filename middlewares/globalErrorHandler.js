const globalErrorHandler=(err, req, res) => {

    const stack = err.stack;
    const message = err.message;
    const status = err.status ? err.status : "Failed";
    const statusCode = err?.statusCode ? err.statusCode : 500;
    res.status(statusCode).json({
        stack, status, message
    })
}

module.exports=globalErrorHandler;