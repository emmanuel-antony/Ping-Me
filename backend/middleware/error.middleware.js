const ErrorHandler = (error , request , response , next ) => {
    Error  = { ...error}
    Error.message = error.message

    // Mongoose bad object id
    if (Error.name == 'CastError') {
            Error.message = "Invalid Resource ID!!"
            Error.statusCode = 400
    }
    
    response.status(Error.statusCode || 500).json({
        success: false,
        message: Error.message || "Internal Server Error😔"
    });
}

export default ErrorHandler