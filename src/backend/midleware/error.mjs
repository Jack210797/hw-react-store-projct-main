const errorHandler = (err, req, res, next) => {
  if (!res.headersSent) {
    res.status(err.status || 500).json({
      status: err.status || 500,
      message: err.message || 'Internal Server Error'
    })
  }
}

const cleanError = (err, req, res, next) => {
  const cleanErrorHandler = sanitizeObject(err)
  res.status(500).json(cleanErrorHandler)
  next()
}

export { errorHandler, cleanError }
