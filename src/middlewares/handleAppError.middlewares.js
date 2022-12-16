import AppError from "../errors/appError";

const handleAppError = (error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  if (error.message.includes("invalid input syntax for type")) {
    return res.status(404).json({ message: error.message });
  }

  console.error(error);
  
  return res.status(500).json({
    message: "internal server error",
  });
};

export default handleAppError;
