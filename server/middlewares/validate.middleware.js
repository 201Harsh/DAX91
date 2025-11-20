import { validationResult } from "express-validator";

const validateRequest = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export default validateRequest;
