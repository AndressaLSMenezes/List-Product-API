const validatedDataMiddleware = (schema) => async (req, res, next) => {
  try {
    const validated = await schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    req.validadBody = validated;
    next()
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default validatedDataMiddleware;
