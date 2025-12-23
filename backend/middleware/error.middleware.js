
const ErrorHandler = (error,request,response,next) => {
    const Error = {...error}
    Error.message  = error.message
    
    // Mongoose Bad Object ID
    if (error.name === 'CastError') {
        Error.message  = 'Resource not FOUND!!!'
        Error.statusCode = 400
    }
      
    response.status(Error.statusCode || 500).json({
        success: false,
        Message: Error.message || 'INTERNAL SERVER ERROR😔'
    })

}

export default ErrorHandler
