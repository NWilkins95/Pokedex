// Middleware to handle async errors
const handleErrors = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

// General error handling middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message,
    details: err.details || null
  });
};

module.exports = { handleErrors, errorHandler };