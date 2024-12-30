export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
}

// res.status()   - meka method ekk
// res.statusCode - meka property ekk